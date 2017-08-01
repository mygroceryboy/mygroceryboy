# mygroceryboy
MEAN Stack with Angular 2 and Typescript Node. Application to sell &amp; buy grocery online.

# launch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug Program",
            "program": "${workspaceRoot}/server/server.ts",
            "cwd": "${workspaceRoot}",
            "env": {
                "NODE_ENV": "development"
            },
            "skipFiles": [
                "node_modules/**/*.js"
            ],
            "outFiles": [
                "${workspaceRoot}/dist/**/*.js"
            ],
            "stopOnEntry": true,
            "console": "internalConsole"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Port",
            "address": "localhost",
            "port": 3000,
            "outFiles": []
        }
    ]
}
```
