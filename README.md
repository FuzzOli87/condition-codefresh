# condition-codefresh

Condition verifier plugin for [`semantic-release`][semantic-release] that checks if this build is running in [`codefresh`][codefresh] CI/CD.

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]
[![Roadmap][roadmap-badge]][roadmap]
[![Semantic Release][semantic-release-badge]][sem-release-badge]
[ ![Commitizen][commitizen-friendly-badge]][comm-friendly-badge]


[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## What does it do
It verifies that the release process is being executed inside Codefresh by checking for ```CF_BUILD_TIMESTAMP``` environment variable and also that this is executed in the right branch configured to release from using ```CF_BRANCH```

> Note: Codefresh is relatively...fresh and they are continuously improving their services. I contacted them about adding support for more specific environment variables(like [travis environment variables][travis-variables]) Some functionality might change if their platform changes.  ¯\\_(ツ)_/¯
> 
## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] as one of your project's `devDependencies`:

```
npm i condition-codefresh -D
```

## Usage
Configure the ```releases``` configuration in your package.json to tell semantic-release to use this in the ```verifyConditions``` step:

```json
{
  "release": {
    "verifyConditions": "condition-codefresh",
  }
}
```


## LICENSE

MIT

[codefresh]: https://codefresh.io/
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[sem-release-badge]: https://github.com/semantic-release/semantic-release
[build-badge]:  https://g.codefresh.io/api/badges/build?repoOwner=FuzzOli87&repoName=condition-codefresh&branch=master&pipelineName=condition-codefresh&accountName=fuzzoli87&type=cf-1
[build]:  https://g.codefresh.io/repositories/FuzzOli87/condition-codefresh/builds?filter=trigger:build;branch:master;service:5961242042986e00015238a5~condition-codefresh
[coverage-badge]: https://img.shields.io/codecov/c/github/FuzzOli87/condition-codefresh.svg?style=flat-square
[coverage]: https://codecov.io/gh/FuzzOli87/condition-codefresh
[dependencyci-badge]: https://dependencyci.com/github/FuzzOli87/condition-codefresh/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/FuzzOli87/condition-codefresh
[version-badge]: https://img.shields.io/npm/v/condition-codefresh.svg?style=flat-square
[package]: https://www.npmjs.com/package/condition-codefresh
[license-badge]: https://img.shields.io/npm/l/condition-codefresh.svg?style=flat-square
[license]: https://github.com/FuzzOli87/condition-codefresh/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/FuzzOli87/condition-codefresh/blob/master/ROADMAP.md
[github-watch-badge]: https://img.shields.io/github/watchers/FuzzOli87/condition-codefresh.svg?style=social
[github-watch]: https://github.com/FuzzOli87/condition-codefresh/watchers
[github-star-badge]: https://img.shields.io/github/stars/FuzzOli87/condition-codefresh.svg?style=social
[github-star]: https://github.com/FuzzOli87/condition-codefresh/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20prettier-eslint-cli!%20https://github.com/FuzzOli87/condition-codefresh%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/FuzzOli87/condition-codefresh.svg?style=social
[semantic-release]: https://github.com/semantic-release/semantic-release
[travis-variables]: https://docs.travis-ci.com/user/environment-variables/
[commitizen-friendly-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[comm-friendly-badge]: http://commitizen.github.io/cz-cli/
