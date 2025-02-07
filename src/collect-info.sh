#!/usr/bin/env sh

SCRIPT_PATH=$(realpath "$0")
SRC_DIR_PATH=$(dirname "$SCRIPT_PATH")
LIB_DIR_PATH="${SRC_DIR_PATH}/lib"

. "${LIB_DIR_PATH}/logging.sh"

main() {
  input_force="${1}"

  python_installed=$(if command -v python >/dev/null 2>&1; then echo true; else echo false; fi)
  echo "python-installed=${python_installed}" >> "$GITHUB_OUTPUT"

  bin_installed="false"
  if command -v brainfucky >/dev/null 2>&1; then
    if [ "${input_force}" = "false" ]; then
      msg="Installation skipped."
      bin_installed="true"
    else
      msg="Executing forced installation."
    fi
    log_info "brainfucky is found at $(which brainfucky). ${msg}"
  else
    log_info "brainfucky is not found. Executing installation."
  fi
  echo "bin-installed=${bin_installed}" >> "$GITHUB_OUTPUT"
}

main "$@"
