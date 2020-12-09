class Command {
  constructor(version, platformRetriever = () => process.platform) {
    this.version = version;
    this.platform = platformRetriever();
  }
  build() {
    const sudo = this.platform !== 'win32' ? 'sudo ' : '';
    const v = this.version ? `==${this.version}` : '';
    return `${sudo}pip3 install brainfucky${v}`;
  }
}

module.exports = Command;
