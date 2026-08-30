# on-merrit-website

Static site for the ON-MERRIT project, built with [Hugo](https://gohugo.io).

## Requirements

- Hugo (installed and version-managed via [hvm](https://github.com/bep/hvm))

## Setup

Select the Hugo version pinned in `.hvm` (downloads it if needed):

    hvm use --useVersionInDotFile

## Develop

    npm run serve

or, with the hvm shell alias installed (`hvm gen alias zsh`):

    hugo server -w

## Build

    npm run build

The output is written to `public/`.

## CSS

Plain CSS in `static/css/`, no build step; lint with `npm run lint:css`.
