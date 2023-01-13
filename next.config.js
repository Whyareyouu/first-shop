const { Domain } = require('domain');

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: ['fakestoreapi.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
