module.exports = {
	async redirects() {
		return [
			{
				source: "/case-studies",
				destination: "/404",
				permanent: true,
			},
			{
				source: "/freebies",
				destination: "/404",
				permanent: true,
			},
		];
	},
};
