# Observation for functionality of import.meta in Jest

## What happens:

### Before installing `@babel/plugin-syntax-import-meta`:

![](/imgs/fail-1.png)

### After installing `@babel/plugin-syntax-import-meta`:

![](/imgs/fail-2.png)

# `import.meta` is not supported inside/outside of test file when using ES modules

## 🐛 This [Bug Report](https://github.com/facebook/jest/issues/9213) in Jest Repo

When using ES Modules the `import.meta` variable is not supported correctly:

- inside a test file;
- inside an external files being imported into a test file.

Error occurs such as `SyntaxError: Cannot use 'import.meta' outside a module`.

## To Reproduce

Steps to reproduce the behavior:

```bash
git clone https://github.com/Userbit/jest-import-meta
cd jest-import-meta/
npm install
npm test
```

## Expected behavior

All tests should be passed succesfully without any errors such as `SyntaxError: Cannot use 'import.meta' outside a module`

## Link to repl or repo (highly encouraged)

[Repo](https://github.com/Userbit/jest-import-meta) with all necessary source code and screenshots about [what happens](https://github.com/Userbit/jest-import-meta#what-happens).

## envinfo

```bash
$ npx envinfo --preset jest
npx: installed 1 in 3.828s

  System:
    OS: Linux 4.15 Ubuntu 18.04.3 LTS (Bionic Beaver)
    CPU: (4) x64 Intel(R) Core(TM) i5-3210M CPU @ 2.50GHz
  Binaries:
    Node: 12.7.0 - /usr/local/bin/node
    npm: 6.10.0 - /usr/local/bin/npm
  npmPackages:
    jest: ^24.9.0 => 24.9.0
```
