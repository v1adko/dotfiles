#### VIM

1) Download an [afterglow](https://github.com/danilo-augusto/vim-afterglow) theme.  
`cd`  
`curl -LJO https://raw.githubusercontent.com/danilo-augusto/vim-afterglow/master/colors/afterglow.vim`  
2) Move it to the proper subdirectory (possibly need to create said folders)  
`mv ./afterglow.vim ./.vim/colors/`  
3) Edit vim config
`vi ./.vimrc`
```
syntax on
colorscheme afterglow
hi Normal guibg=NONE ctermbg=NONE
```

Interactive `git rebase`:  
<img alt="VIM git rebase" src="../img/vim-rebase.png" width="500px">
  
Regular `.js` file:  
<img alt="VIM js file" src="../img/vim-js.png" width="500px">
