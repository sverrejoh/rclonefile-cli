# rclonefile-cli

> The macOS API for creating copy on write clones of files and folders

## Description

This is a small wrapper around the
[clonefile(2)](https://www.manpagez.com/man/2/clonefile/) API on macOS for
cloning files and folders.

## Why?

- Clones files and folders, without taking up disk space
- Uses [clonefile(2)](https://www.manpagez.com/man/2/clonefile/) introduced in macOS 10.12
- Takes advantage of the APFS file system
- All flags available.
- Fast!

## Install

```sh

    npm install --global rclonefile-cli

```


## Usage 

```js

$ rclonefile --help

    Usage
    $ rclonefile <source> <destination>

    Options
    --no-follow, -f      Don't follow the src file if it is a symbolic link
    --no-owner-copy, -c  Don't copy ownership information from the source
    --clone-acl, -a      Copy ACLs from the source file.

    Examples
      $ rclonefile super-mario.png super-clone.png

```

## Related

- [rclonefile](https://github.com/sverrejoh/rclonefile) - API for this module
- [clonefile(2)](https://www.manpagez.com/man/2/clonefile/) - Man page for system API
