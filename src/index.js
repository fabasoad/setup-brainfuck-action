const core = require('@actions/core');
const { exec } = require('@actions/exec');
const Command = require('./command');

const version = core.getInput('version');

(async () => {
  try {
    await exec(new Command(version).build());
  } catch (e) {
    core.setFailed(e.message);
  }
})();
