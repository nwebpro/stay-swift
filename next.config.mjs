/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				hostname: 'www.pngall.com',
			},
			{
				hostname: 'a0.muscache.com',
			},
		],
	},
};

export default nextConfig;
