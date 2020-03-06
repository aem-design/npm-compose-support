<div align="center">

[![build][build]][build-url]
[![travis ci][travis]][travis-url]
[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![deps dev][deps-dev]][deps-dev-url]
[![dependabot status][dependabot]][dependabot-url]
[![repo size][repo-size]][repo-size-url]
[![last commit][last-commit]][last-commit-url]
[![downloads][downloads]][npm-url]
[![contributors][contributors]][contributors-url]

# @aem-design/compose-support

</div>

## Table of Contents
- [Background](#background)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Background
Support code for the compose project.

## Getting Started
First things first, install the module:

```bash
npm install @aem-design/compose-support --save-dev
# or with Yarn
yarn add @aem-design/compose-support -D
```

## Usage
This package is extremely simple for now and contains only logging helpers. To use them import the logger namespace as shown below.

```js
const { logger } = require('@aem-design/compose-support')

logger.info('Hello world!')
```

## Contributing
Contributions are welcome! Read the [Contributing Guide](CONTRIBUTING.md) for more information.

## License
[Apache-2.0](./LICENSE)

[build]: https://github.com/aem-design/npm-compose-support/workflows/Build/badge.svg
[build-url]: https://github.com/aem-design/npm-compose-support/actions?workflow=Build

[travis]: https://travis-ci.com/aem-design/npm-compose-support.svg?branch=develop
[travis-url]: https://travis-ci.com/aem-design/npm-compose-support

[npm]: https://img.shields.io/npm/v/@aem-design/compose-support.svg
[npm-url]: https://npmjs.com/package/@aem-design/compose-support

[node]: https://img.shields.io/node/v/@aem-design/compose-support.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/aem-design/npm-compose-support.svg
[deps-url]: https://david-dm.org/aem-design/npm-compose-support

[deps-dev]: https://david-dm.org/aem-design/npm-compose-support/dev-status.svg
[deps-dev-url]: https://david-dm.org/aem-design/npm-compose-support?type=dev

[dependabot]: https://api.dependabot.com/badges/status?host=github&repo=aem-design/npm-compose-support
[dependabot-url]: https://dependabot.com

[repo-size]: https://img.shields.io/github/repo-size/aem-design/npm-compose-support
[repo-size-url]: https://github.com/aem-design/npm-compose-support

[last-commit]: https://img.shields.io/github/last-commit/aem-design/npm-compose-support
[last-commit-url]: https://github.com/aem-design/npm-compose-support/commits

[downloads]: https://img.shields.io/npm/dm/@aem-design/compose-support.svg

[contributors]: https://img.shields.io/github/contributors/aem-design/npm-compose-support.svg
[contributors-url]: https://github.com/aem-design/npm-compose-support/graphs/contributors
