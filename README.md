# Setup Brainfuck

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Releases](https://img.shields.io/github/v/release/fabasoad/setup-brainfuck-action?include_prereleases)
![Functional Tests](https://github.com/fabasoad/setup-brainfuck-action/workflows/Functional%20Tests/badge.svg)
![pre-commit](https://github.com/fabasoad/setup-brainfuck-action/actions/workflows/pre-commit.yml/badge.svg)

This action installs one of the brainfuck interpreters called [brainfucky](https://pypi.org/project/brainfucky/).

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:
[pip3](https://pip.pypa.io/en/stable/).

## Inputs

<!-- prettier-ignore-start -->
| Name    | Required | Description                                                                                       | Default    | Possible values        |
|---------|----------|---------------------------------------------------------------------------------------------------|------------|------------------------|
| version | No       | Brainfucky library version that can be found [here](https://pypi.org/project/brainfucky/) version | `0.1.dev1` | `0.1.dev1`, `0.1.dev0` |
<!-- prettier-ignore-end -->

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
      - uses: actions/checkout@main
      - uses: fabasoad/setup-brainfuck-action@main
      - name: Hello World
        run: |
          touch ./hello-world.bf
          echo "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.++" > ./hello-world.bf
          echo "+.------.--------.>>+.>++." >> ./hello-world.bf
          brainfucky --file ./hello-world.bf
          rm ./hello-world.bf
```

### Result

```text
executing file ./hello-world.bf
Hello World!
```
