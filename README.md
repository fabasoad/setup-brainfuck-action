# Brainfuck install action
![](https://img.shields.io/github/v/release/fabasoad/brainfuck-install-action?include_prereleases) ![YAML Lint](https://github.com/fabasoad/brainfuck-install-action/workflows/YAML%20Lint/badge.svg)

This action installs one of the brainfuck interpreters called [brainfucky](https://pypi.org/project/brainfucky/). 

## Inputs
1. `version` - _[Optional]_ Brainfucky library version. Default is the [latest](https://pypi.org/project/brainfucky/) version.

## Example usage

### Workflow configuration

```yaml
name: Test

on: push

jobs:
  build:
    name: Brainfuck
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: fabasoad/brainfuck-install-action@v1.0.0
        with:
          version: 0.1.dev1
      - name: Hello World
        run: |
          touch /hello-world.bf
          echo "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.++" > /hello-world.bf
          echo "+.------.--------.>>+.>++." >> /hello-world.bf
          brainfucky --file /hello-world.bf

```

### Result
![Result](https://raw.githubusercontent.com/fabasoad/brainfuck-install-action/master/screenshot.png)
