import SRErr from '@semantic-release/error';

export default function conditionCodefresh(pluginCfg, config, cb) {
  const { env, options } = config;

  // This is the only way to tell if we are in Codefresh for now.
  if (!env.CF_BUILD_TIMESTAMP) {
    return cb(
      new SRErr(
        'semantic-release did not run on Codefresh CI. A new version will not be published',
        'ENOCODEFRESH'
      )
    );
  }

  const validBranch = options.branch;
  const codeFreshBranch = env.CF_BRANCH;

  // Always run on master branch, don't know about behavior with PRs
  if (validBranch !== codeFreshBranch) {
    return cb(
      new SRErr(
        `This was triggered on branch ${codeFreshBranch}, but semantic-release is configured 
        to only publish from branch ${validBranch}.
        You can customize this behavior using the "branch" option: git.io/sr-options`,
        'EBRANCHMISMATCH'
      )
    );
  }

  return cb();
}
