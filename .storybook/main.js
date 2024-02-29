export const stories = ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"];
export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
];
export const framework = {
  name: "@storybook/react-webpack5",
  options: {}
};
export async function babel(options) {
  return ({
    ...options,
    presets: [
      ["@babel/preset-env", { shippedProposals: true, loose: true }],
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
      ["@babel/preset-typescript"],
    ],
  });
}
export const docs = {
  autodocs: true
};
export default {
  // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  docs: {
    autodocs: true
  }
};