#!/usr/bin/env node

import meow from "meow";
import { cloneFile } from "rclonefile";

const cli = meow(
  `
	Usage
	  $ foo <source> <destination>

	Options
    --no-follow, -f Don't follow the src file if it is a symbolic link

    --no-owner-copy, -c Don't copy ownership information from the source when
      run called with superuser privileges.

    --clone-acl, -a Copy ACLs from the source file.

	Examples
	  $ rclonefile super-mario.png super-clone.png
`,
  {
    importMeta: import.meta,
    flags: {
      noFollow: {
        type: "boolean",
        alias: "f",
        default: false,
      },
      noOwnerCopy: {
        type: "boolean",
        alias: "c",
        default: false,
      },
      cloneAcl: {
        type: "boolean",
        alias: "a",
        default: false,
      },
    },
  }
);

const [source, target] = cli.input;
try {
  if (!source) {
    throw Error("Missing file operand");
  }
  if (!target) {
    throw Error(`Missing destination file operand after '${source}'`);
  }

  await cloneFile(cli.input[0], cli.input[1], cli.flags);
} catch (error: any) {
  console.error(`rclonefile: ${error.message}`);
  process.exit(1);
}
