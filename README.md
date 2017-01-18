# codemod - tooling

A small tool to automate pull requests and code changes


## Execute with a variable file
1. Set up the variables
  - create a variable file named `variables.txt`, one directory per line

    ```
    repos/livingdocs-server upfrontIO/livingdocs-server
    repos/nzz-api nzzdev/livingdocs-api
    repos/livingdocs-editor upfrontIO/livingdocs-editor
    repos/nzz-editor nzzdev/livingdocs-editor
    ```

2. execute a command using
   - `./execdir git status`
   - or `./execdir -c hub clone $VAR1 .`
   - you can use any space separated variable, just postfix `$VAR` with the index (zero based index) on a specific line

   - have fun with the command aliases in `./run`


## Pipe dirs to ./eachdir
Instead of creating a variables file, you can also pipe variables to the command.

```
$ find repos/* -d | ./eachdir -r pwd
/Users/marcbachmann/Development/upfrontIO/codemod/repos/livingdocs-editor
/Users/marcbachmann/Development/upfrontIO/codemod/repos/livingdocs-server
/Users/marcbachmann/Development/upfrontIO/codemod/repos/nzz-api
/Users/marcbachmann/Development/upfrontIO/codemod/repos/nzz-editor
```


## Usage
```
Usage: ./exec [-r] [-c] <command>

-r         don't use formatted output
-c         use a 'bash -c' like syntax to execute commands & interpolate variables
<command>  the command to execute in the directory

The absolute path to the directory is available as `$DIR`.
The current working directory is available as `$ROOT`
```

## Screenshot
![example][example]
[example]: docs/example.png
