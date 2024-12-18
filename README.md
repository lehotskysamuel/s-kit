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
