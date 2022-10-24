# Setup Brainfuck

![Releases](https://img.shields.io/github/v/release/fabasoad/setup-brainfuck-action?include_prereleases)
![Functional Tests](https://github.com/fabasoad/setup-brainfuck-action/workflows/Functional%20Tests/badge.svg)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/fabasoad/setup-brainfuck-action/main.svg)](https://results.pre-commit.ci/latest/github/fabasoad/setup-brainfuck-action/main)

This action installs one of the brainfuck interpreters called [brainfucky](https://pypi.org/project/brainfucky/).

## Inputs

<!-- markdownlint-disable MD013 -->
| Name    | Required | Description                                                                                       | Default | Possible values |
|---------|----------|---------------------------------------------------------------------------------------------------|---------|-----------------|
| version | No       | Brainfucky library version. Default is the [latest](https://pypi.org/project/brainfucky/) version | latest  | &lt;String&gt;  |
<!-- markdownlint-enable MD013 -->

## Example usage

### Workflow configuration

<!-- markdownlint-disable MD013 -->
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
<!-- markdownlint-enable MD013 -->

### Result

```shell
executing file ./hello-world.bf
Hello World!
```
