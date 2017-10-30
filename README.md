# Dotfiles

My editor of choice at the moment is [Visual Studio Code](https://github.com/Microsoft/vscode)  
So for now I'm gonna keep my settings and config here.

#### Terminal

I use [OhMyZsh](https://github.com/robbyrussell/oh-my-zsh#basic-installation) as my shell with [iTerm2](https://www.iterm2.com/downloads.html).  
My terminal theme of choise is [honukai](https://github.com/oskarkrawczyk/honukai-iterm-zsh#installation).  
I also modify background colors of the terminal window to use [#07373e](http://www.color-hex.com/color/07373e) for background with 10% blur and opacity.

#### Tools
- [Terminal](#terminal)
- [Homebrew](https://brew.sh/index.html)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- Global node modules:
  - [ncu](https://www.npmjs.com/package/npm-check-updates)
  - [gtop](https://www.npmjs.com/package/gtop)
- [Docker](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew)
  - Giving correct [permissions](https://stackoverflow.com/a/29003511) to the db folder

#### VS Code
##### Settings Backup Restore

To restore all settings, keybindings and snippets run  
`yarn restore:vscode-settings`

##### Extensions Installation
To install all extensions specified in [extensions.yml](./vscode/extensions.yml) run  
`yarn restore:vscode-extensions`

<img alt="VS Code Extensions" src="./img/vscode.png" width="900px">

#### TODO:
- [x] Automatic config export/import scripts (cli) for VS Code
- [ ] Expand repo to other possible [dotfiles](https://dotfiles.github.io/) if needed
- [ ] Add core project .prettierrc, .gitignore and possibly others
- [ ] Describe my git aliasses (or partially copy config)
- [ ] VSCode Run Current test setup
- [ ] Possible setting sync via GitHub gist - [reference](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
- [ ] Debugger config guide for VS Code
- [ ] Ironically move all of this to Issues :)
