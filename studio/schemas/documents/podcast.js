export default {
	name: "podcast",
	title: "Podcast",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			title: "External link",
			name: "link",
			type: "string",
			description: "Example: https://www.sanity.io",
		},
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
	},
};
