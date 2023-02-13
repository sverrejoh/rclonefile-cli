# rclonefile-cli

Clone files.

## Description

The macOS API for creating copy on write clones of files.

This is a small wrapper around the
[clonefile](https://www.manpagez.com/man/2/clonefile/) API on macOS for cloning
files.


## Install

```sh

	npm install --global rclonefile-cli

```


## Usage 

```js

$ rclonefile --help

	Usage
	  $ foo <source> <destination>

	Options
    --no-follow, -f Don't follow the src file if it is a symbolic link

    --no-owner-copy, -c Don't copy ownership information from the source when
      run called with superuser privileges.

    --clone-acl, -a Copy ACLs from the source file.

	Examples
	  $ rclonefile super-mario.png super-clone.png

```
