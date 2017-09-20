const chalk = require('chalk');
const semver = require('semver');
const packageConfig = require('../package.json');
const shell = require('shelljs');
const { execSync } = require('child_process');

const exec = cmd => execSync(cmd).toString().trim();

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node,
  },
];

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm,
  });
}

module.exports = () => {
  const warnings = [];
  versionRequirements.forEach((mod) => {
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(`${mod.name}: ${
        chalk.red(mod.currentVersion)} should be ${
        chalk.green(mod.versionRequirement)}`);
    }
  });

  if (warnings.length) {
    /* eslint-disable no-console */
    console.log(`\n${chalk.yellow('To use this template, you must update following to modules:')}\n`);
    warnings.forEach(warning => console.log(`  ${warning}`));
    console.log();
    process.exit(1);
  }
};
