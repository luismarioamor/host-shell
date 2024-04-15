/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const prod = process.env.NODE_ENV === "production";
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    pokemonOne: `pokemon-one@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    pokemonTwo: `pokemon-two@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    pokemonThree: `pokemon-three@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host-shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        exposes: {
          "./card": "./components/CardPokemon/index.tsx",
        },
      })
    );
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
