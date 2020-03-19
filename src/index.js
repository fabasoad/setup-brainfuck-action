const core = require('@actions/core');
const exec = require('@actions/exec');

const version = core.getInput('version');

(async () => {
  try {
    await exec.exec('pip install brainfucky' + (!version || version === 'latest' ? '' : `==${version}`));
  } catch (e) {
    core.setFailed(e.message);
  }
})();