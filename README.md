# wecken.github.io

Wecken's portfolio website published with GitHub Pages.

## Overview

This is a static portfolio site built with Create React App, React, TypeScript, MUI, Emotion, React Router, and i18next.

The site includes:

- About page
- Works list
- Individual work detail pages
- Japanese and English translation resources
- Shared theme and reusable UI components

## Repository

- GitHub repository: `git@github.com:wecken/wecken.github.io.git`
- Development branch: `main`
- GitHub Pages deployment branch: `gh-pages`

The current local `main` branch tracks `origin/main`. The repository also has an `origin/gh-pages` branch, and `package.json` includes a deploy script that builds the app and publishes the `build` directory to `gh-pages`.

## Project Structure

```text
src/
  App.tsx
  index.tsx
  assets/images/
  libs/
    components/
      molecules/
      utils/
      views/
    theme/
    translations/
  types/
public/
build/
static/
```

Key files:

- `src/index.tsx`: React entry point and router setup
- `src/App.tsx`: Route definitions, i18next setup, and global theme wrapper
- `src/libs/components/views/`: Page-level components
- `src/libs/components/molecules/`: Reusable UI components
- `src/libs/theme/`: MUI and Emotion theme setup
- `src/libs/translations/`: Japanese and English translation resources

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Build

Create a production build:

```sh
npm run build
```

The production files are generated in `build/`.

## Deploy

Deploy to GitHub Pages:

```sh
npm run deploy
```

This runs:

```sh
yarn build && gh-pages -d build
```

and publishes the generated `build` directory to the `gh-pages` branch.

## Notes

Some built files are present in the repository root and `static/`, while the normal Create React App production output is generated under `build/`. For future maintenance, prefer treating `src/` as the source of truth and `build/` / `gh-pages` as deployment output.
