# s-kit

## Setup commands:

Follow these steps to set up a new project with code generators.
Prefer these commands for the initial setup as new versions of the
generators can generate different content. Only add what you need manually
from files inside this repo to files in your repo at the end.

1. Setup env and package managers

- `git init`
- `yarn init -2`
- `volta pin node@lts`
- `yarn set version stable`
- `volta pin yarn`
- `yarn config set nodeLinker node-modules`
    - revisit later
    - required for SST, they currently don't support PnP
- `yarn add -D prettier`
- copy these files `.prettierrc`, `.editorconfig`, `.gitignore`
- `yarn install`

2. Setup TypeScript

- `yarn add -D typescript`
- `yarn add -D @tsconfig/recommended @tsconfig/strictest`
- for backend also: `yarn add -D @tsconfig/node-lts`
- for frontend also: `yarn add -D @tsconfig/vite-react` or `yarn add -D @tsconfig/next`
- copy tsconfigs from this repo (they will extend the configs above)
- double-check with `npx tsc --showConfig`

3. Setup SST

- `yarn add sst`
- put sst as script to root `package.json`
- `yarn run sst init`
- 

TODO in progress


todo add power tools https://github.com/aws-powertools/powertools-lambda-typescript

4. Setup the rest

- `yarn add lodash`
- `yarn add -D @types/lodash`
- 
