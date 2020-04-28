![](https://raw.githubusercontent.com/ScaleLeap/semantic-release-config/master/docs/assets/header.png)

📦 @scaleleap/semantic-release-config
===================================

[Semantic Release](https://github.com/semantic-release/semantic-release) shareable config to publish NPM packages with [GitHub](https://github.com).

---

## Plugins

This shareable configuration uses the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Summary

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]\n\nnotes").
- Creates a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publishes the same tarball to [NPM](https://github.com/semantic-release/npm).
- Commits the version change in `package.json`.
- Creates or updates a [changelog](https://github.com/semantic-release/changelog) file.

## Download & Installation

```sh
$ npm i -D @scaleleap/semantic-release-config
```

## Usage

The shareable config can be configured in the [semantic-release configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

In `package.json`:

```json
{
  "release": {
    "extends": "@scaleleap/semantic-release-config"
  }
}
```

## Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:

- [`GH_TOKEN`](https://github.com/settings/tokens) with [`public_repo`](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) access.
- [`NPM_TOKEN`](https://docs.npmjs.com/cli/token)
- [`NODE_AUTH_TOKEN`](https://docs.npmjs.com/cli/token)
- [`SLACK_WEBHOOK`](https://github.com/juliuscc/semantic-release-slack-bot/) *Optional*

See each [plugin](#plugins) documentation for required installation and configuration steps.

## Contributing

This repository uses [Conventional Commit](https://www.conventionalcommits.org/) style commit messages.

## Authors or Acknowledgments

* Roman Filippov ([Scale Leap](https://www.scaleleap.com))

## License

This project is licensed under the MIT License.

## Badges

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/semantic-release-config/CI)](https://github.com/ScaleLeap/semantic-release-config/actions)
[![NPM](https://img.shields.io/npm/v/@scaleleap/semantic-release-config)](https://npm.im/@scaleleap/semantic-release-config)
[![License](https://img.shields.io/npm/l/@scaleleap/semantic-release-config)](./LICENSE)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
