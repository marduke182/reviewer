
const createJestConfig = require('../../createJestConfig');

module.exports = {
  ...createJestConfig(__dirname),
  rootDir: './',
};
