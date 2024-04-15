/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const prod = process.env.NODE_ENV === "production";

const urlPokemonOne = prod
  ? "https://pokemon-one-gules.vercel.app"
  : "http://localhost:3001";

const urlPokemonTwo = prod
  ? "https://pokemon-two-two.vercel.app"
  : "http://localhost:3002";

const urlPokemonThree = prod
  ? " https://pokemon-three-five.vercel.app"
  : "http://localhost:3003";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    pokemonOne: `pokemon-one@${urlPokemonOne}/_next/static/${location}/remoteEntry.js`,
    pokemonTwo: `pokemon-two@${urlPokemonTwo}/_next/static/${location}/remoteEntry.js`,
    pokemonThree: `pokemon-three@${urlPokemonThree}/_next/static/${location}/remoteEntry.js`,
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
