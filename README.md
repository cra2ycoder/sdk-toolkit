# sdk-toolkit

### prerequisites

- installing the `rollup` in global is mandatory steps to be done. Please use the following command to install.

```s
npm install --global rollup
```

- if you are using `typescript` then
  
```s
npm install -g typescript
```

```s
# with prompts
jsdk -c file=./jsdk/main.js

# to skip prompts
jsdk -c file=./jsdk/main.js -y 
```


### cautions

- caution: make sure with the file path that we sharing to the rollup entry/input point
- caution: your file path location should not contain any spaces since rollup has parsing error
`[!]Error: Could not resolve entry module`

### issues

- [ ] path issue is still there, need to find alternate way to fix the same `@jsdk-cli/rollup/compile.js => @todo`

#### TODO

- [ ] node resolve
- [ ] compression _prompt_
- [ ] comments removal _prompt_
- [ ] transipliers (babel)
- [ ] typescript support
- [ ] JSX support
- [ ] CSS splitup
- [ ] SASS support
- [ ] external libs splitup _prompt_
- [ ] sourcemap _prompt_
- [ ] minification _prompt
- [ ] multiple format _prompt_