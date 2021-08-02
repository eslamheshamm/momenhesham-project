export default {
	name: "widget",
	title: "Widgets",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "excerpt",
			type: "text",
			title: "Summery",
			validation: (Rule) => Rule.required().min(10).max(180),
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
	},
};
