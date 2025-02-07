# Setup Brainfuck

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Releases](https://img.shields.io/github/v/release/fabasoad/setup-brainfuck-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-brainfuck-action/actions/workflows/functional-tests.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-brainfuck-action/actions/workflows/linting.yml/badge.svg)
![security](https://github.com/fabasoad/setup-brainfuck-action/actions/workflows/security.yml/badge.svg)

This action installs [brainfucky](https://pypi.org/project/brainfucky/) - one of
the brainfuck interpreters.

## Supported OS

<!-- prettier-ignore-start -->
| OS      |                    |
|---------|--------------------|
| Windows | :white_check_mark: |
| Linux   | :white_check_mark: |
| macOS   | :white_check_mark: |
<!-- prettier-ignore-end -->

## Prerequisites

None.

## Inputs

```yaml
- uses: fabasoad/setup-brainfuck-action@v1
  with:
    # (Optional) brainfucky interpreter version. Defaults to the latest version.
    version: "0.1.dev1"
    # (Optional) If "false" skips installation if brainfucky is already installed.
    # If "true" installs brainfucky in any case. Defaults to "false".
    force: "false"
    # (Optional) GitHub token that is used to send requests to GitHub API such
    # as getting available python versions. Defaults to the token provided by
    # GitHub Actions environment.
    github-token: "${{ github.token }}"
```

## Outputs

<!-- prettier-ignore-start -->
| Name      | Description                             | Example |
|-----------|-----------------------------------------|---------|
| installed | Whether brainfucky was installed or not | `true`  |
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
