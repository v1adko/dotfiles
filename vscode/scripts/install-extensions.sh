#!/bin/bash

while IFS='' read -r line || [[ -n "$line" ]]; do
    if ! [[ -z "$line" ]] && ! [[ $line = \#* ]] ; then
        code --install-extension $line
    fi
done < ./vscode/extensions.yml
