Just working on solving [Advent of Code for 2023](https://adventofcode.com).

# Day 1
I solved Day 1 fairly quickly, but it took a lot of the Googling for me to refresh my memory on the `for` structures available in Node and JavaScript. It's quite literally been over two years since I committed a line of code at all, much less a production line of code. Was fun, but a bit frustrating to get this first solution going.

# Day 2
The Day 2 challenge took me longer than I'd like because I ended up fighting with breakpoints in VS Code for over half an hour, only for it to turn out it was a problem in in `launch.json`. Do you see the problem?

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Program",
            "program": "${workspaceFolder}/day2/day2-part2.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        },
    ]
}
```

compared to

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Program",
            "program": "${workspaceFolder}/Day2/day2-part2.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        },
    ]
}
```

That's right... it was a casing issue. With `/day2/` in the path instead of `/Day2/` the node file would run fine, but VS code wouldn't attach the debugger, so my breakpoints were completely ignored.