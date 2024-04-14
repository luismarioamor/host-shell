/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host-shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          pokemonOne:
            "pokemon-one@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
