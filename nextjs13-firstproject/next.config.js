/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	async headers() {
		return [
			{
				source: '/app/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, must-revalidate',
					},
				],
			}
		]
	},
}

module.exports = nextConfig
