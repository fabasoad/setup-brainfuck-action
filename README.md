# Brainfuck install action
![](https://img.shields.io/github/v/release/fabasoad/setup-brainfuck-action?include_prereleases) ![CI (latest)](https://github.com/fabasoad/setup-brainfuck-action/workflows/CI%20(latest)/badge.svg) ![CI (master)](https://github.com/fabasoad/setup-brainfuck-action/workflows/CI%20(master)/badge.svg) ![YAML Lint](https://github.com/fabasoad/setup-brainfuck-action/workflows/YAML%20Lint/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/setup-brainfuck-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-brainfuck-action/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/setup-brainfuck-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-brainfuck-action/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/2f420ee213901de286fe/maintainability)](https://codeclimate.com/github/fabasoad/setup-brainfuck-action/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/setup-brainfuck-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/setup-brainfuck-action?targetFile=package.json)

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
      - uses: fabasoad/setup-brainfuck-action@v1.0.0
        with:
          version: 0.1.dev1
      - name: Hello World
        run: |
          touch ./hello-world.bf
          echo "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.++" > ./hello-world.bf
          echo "+.------.--------.>>+.>++." >> ./hello-world.bf
          brainfucky --file /hello-world.bf
          rm ./hello-world.bf

```

### Result
![Result](https://raw.githubusercontent.com/fabasoad/setup-brainfuck-action/master/screenshot.png)
