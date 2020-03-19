const core = require('@actions/core');
const { exec } = require('@actions/exec');

const version = core.getInput('version');

(async () => {
  try {
    const sudo = process.platform !== 'win32' ? 'sudo ' : '';
    await exec(`${sudo}pip3 install brainfucky` + (version ? `==${version}` : ''));
  } catch (e) {
    core.setFailed(e.message);
  }
})();