import meow from "meow";
import { cloneFile } from "rclonefile";
const cli = meow(`
	Usage
	  $ foo <source> <destination>

	Options
    --no-follow, -n Don't follow the src file if it is a symbolic link

    --no-owner-copy, -o Don't copy ownership information from the source when
      run called with superuser privileges.

    --clone-acl, -c Copy ACLs from the source file.

	Examples
	  $ rclonefile super-mario.png super-clone.png
`, {
    importMeta: import.meta,
    flags: {
        noFollow: {
            type: "boolean",
            alias: "n",
            default: false,
        },
        noOwnerCopy: {
            type: "boolean",
            alias: "o",
            default: false,
        },
        cloneAcl: {
            type: "boolean",
            alias: "c",
            default: false,
        },
    },
});
console.log("Flags:", cli.flags);
await cloneFile(cli.input[0], cli.input[1], {
    noFollow: cli.flags.noFollow,
    noOwnerCopy: cli.flags.noOwnerCopy,
    cloneAcl: cli.flags.cloneAcl,
});
