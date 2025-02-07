#!/usr/bin/env sh

main() {
  pip_package="${1}"

  version=$(curl -s "https://pypi.org/pypi/${pip_package}/json" \
    | jq -r '.releases | keys | .[-1:][0]')
  echo "version=${version}" >> "${GITHUB_OUTPUT}"
}

main "$@"
