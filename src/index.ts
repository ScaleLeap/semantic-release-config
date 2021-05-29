// https://semantic-release.gitbook.io/semantic-release/extending/plugins-list

const TARBALL_DIRECTORY = 'pack'

type PluginName = string
type PluginConfig = Record<string, string | number | boolean>
type Plugin = PluginName | [PluginName, PluginConfig]

const plugins: Plugin[] = [
  // https://github.com/semantic-release/commit-analyzer
  '@semantic-release/commit-analyzer',

  // https://github.com/semantic-release/release-notes-generator
  '@semantic-release/release-notes-generator',

  // https://github.com/semantic-release/changelog
  [
    '@semantic-release/changelog',
    {
      changelogTitle: `
# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
        `.trim(),
    },
  ],

  // https://github.com/semantic-release/npm
  [
    '@semantic-release/npm',
    {
      tarballDir: TARBALL_DIRECTORY,
    },
  ],

  // https://github.com/semantic-release/github
  [
    '@semantic-release/github',
    {
      assets: `${TARBALL_DIRECTORY}/*.tgz`,
    },
  ],

  // https://github.com/semantic-release/git
  '@semantic-release/git',
]

if (process.env.SLACK_WEBHOOK) {
  plugins.push([
    // https://github.com/juliuscc/semantic-release-slack-bot/
    'semantic-release-slack-bot',
    {
      notifyOnSuccess: true,
      notifyOnFail: true,
      markdownReleaseNotes: true,
    },
  ])
}

const config = {
  plugins,
}

export default config

module.exports = config
