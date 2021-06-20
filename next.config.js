const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});

module.exports = withMDX({
  pageExtensions: ['tsx','ts', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});