# gha-git-config-copy

JavaScript GitHub Action that injects a token into Git's credential cache and removes it in a post step.

## Verify

- `mise run check`: `npm ci` and both ncc bundles.
- CI additionally requires `git diff --exit-code HEAD -- dist`; commit every generated change.
- CodeQL, actionlint, zizmor, and strict Renovate validation run alongside the build.

## Stack

Follows https://github.com/BlackDark/agent-presets/blob/main/stack/core.md. The action runs on GitHub's Node 24 runtime; local builds use the pinned mise Node runtime.

## Map

- `index.js`: token injection.
- `cleanup.js`: credential cleanup in the post step.
- `dist/`: generated ncc bundles, never hand-edited.
- `action.yml`: Node runtime and entry points.

## Git

- Conventional Commits, one topic per PR.
- Squash unless commits need separate review.
- Force-push only with `--force-with-lease` on own branches.

## Boundaries

- Tools come from `mise.toml`; no global installs.
- Never log tokens or credential-helper output. Do not publish action tags from a local session.
