const itParam = require('mocha-param');
const { assert } = require('chai');
const Command = require('../src/command');

describe('Test Command class', () => {
  itParam(
    'should return correct command for ${value}',
    ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'],
    (platform) => {
      const version = '9cb25a';
      const command = new Command(version, () => platform);
      const sudo = platform !== 'win32' ? 'sudo ' : '';
      assert.equal(
        `${sudo}pip3 install brainfucky` + (version ? `==${version}` : ''),
        command.build()
      );
    }
  );
});
