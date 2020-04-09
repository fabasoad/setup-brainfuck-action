class Command {
  constructor(version, platformRetriever = () => process.platform) {
    this.version = version;
    this.platform = platformRetriever();
  }
  build() {
    const sudo = this.platform !== 'win32' ? 'sudo ' : '';
    return `${sudo}pip3 install brainfucky` + (this.version ? `==${this.version}` : '');
  }
}

module.exports = Command;