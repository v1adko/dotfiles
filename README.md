# Dotfiles

My editor of choice at the moment is [Visual Studio Code](https://github.com/Microsoft/vscode)  
So for now I'm gonna keep my settings and config here.

#### TODO:
- [ ] Expand repo to other [dotfiles](https://dotfiles.github.io/)
- [x] Automatic config export/import scripts (cli) for VS Code
- [ ] Possible setting sync via GitHub gist - [reference](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
- [ ] Debugger config guide for VS Code

#### VS Code
##### Settings Backup Restore

To restore all settings, keybindings and snippets run  
`yarn restore:vscode-settings`

##### Extensions Instalation
To install all extensions specified in [extensions.yml](./vscode/extensions.yml) run  
`yarn restore:vscode-extensions`

<img alt="VS Code Extensions" src="./img/vscode.png" width="900px">
