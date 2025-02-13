module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    'storybook-design-token',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'webpack5'
  }
};
