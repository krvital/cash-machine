module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    URL: 'http://localhost:1234',
  },
  testMatch: ['**/tests/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globalSetup: './jest.global-setup.ts',
};
