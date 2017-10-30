# Dotfiles

Here I will keep the basic tools, links and config files in order to make transfer to a new MacOS system faster.  
My editor of choice at the moment is [Visual Studio Code](#vs-code) so most of the config is for it.

#### Terminal

I use [OhMyZsh](https://github.com/robbyrussell/oh-my-zsh#basic-installation) as my shell with [iTerm2](https://www.iterm2.com/downloads.html).  
My terminal theme of choise is [honukai](https://github.com/oskarkrawczyk/honukai-iterm-zsh#installation).  
I also modify colors of the terminal window to use [#07373e](http://www.color-hex.com/color/07373e) for background with 10% blur and opacity.

1) Install [OhMyZsh](https://github.com/robbyrussell/oh-my-zsh#basic-installation)
2) Download a [theme](https://raw.githubusercontent.com/oskarkrawczyk/honukai-iterm-zsh/master/honukai.zsh-theme)
3) Move the theme to the themes folder
   `mv ./honukai.zsh-theme ./.oh-my-zsh/themes/`
4) Set theme to honukai  
   `vi .zshrc` -> `ZSH_THEME=honukai`

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

1) [Download](https://github.com/Microsoft/vscode) the editor
2) Clone this repo
  `git clone https://github.com/v1adko/dotfiles.git && cd /dotfiles`
3) Enable `code` command in the terminal by doing `Shift + CMD + P` -> `'Install "code" command in PATH'`  
4) Install [tools](#tools) - node and yarn in particular.
5) Run the [restore](#settings-backup-restore) commands

##### Settings Backup Restore

To restore all settings, keybindings and snippets run  
`yarn restore:vscode-settings`

##### Extensions Installation
To install all extensions specified in [extensions.yml](./vscode/extensions.yml) run  
`yarn restore:vscode-extensions`

<img alt="VS Code Extensions" src="./img/vscode.png" width="900px">

#### Git

Setup [aliases](https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases)
`
git config --global alias.co checkout && \
git config --global alias.br branch && \
git config --global alias.cm commit && \
git config --global alias.cma commit -am && \
git config --global alias.st status
`

#### TODO:
- [x] Automatic config export/import scripts (cli) for VS Code
- [ ] Expand repo to other possible [dotfiles](https://dotfiles.github.io/) if needed
- [ ] Add core project .prettierrc, .gitignore and possibly others
- [ ] Config VIM theme
- [ ] Describe my git aliasses (or partially copy config)
- [ ] VSCode Run Current test setup
- [ ] Possible setting sync via GitHub gist - [reference](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
- [ ] Debugger config guide for VS Code
- [ ] Make a way to easily export (update) any current VS config to the files in the repo
- [ ] Ironically move all of this to Issues :)
