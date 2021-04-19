import S from "@sanity/desk-tool/structure-builder";

const blog = S.listItem()
	.title("Blog")
	.child(
		S.list()
			.title("Blog Section")
			.items([
				S.listItem()
					.title("Published posts")
					.schemaType("post")
					.child(
						S.documentList("post")
							.title("Published posts")
							.menuItems(S.documentTypeList("post").getMenuItems())
							// Only show posts with publish date earlier than now and that is not drafts
							.filter(
								'_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
							)
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType("post")
									.views([S.view.form()])
							)
					),
				S.documentTypeListItem("post").title("All posts"),
				S.documentTypeListItem("comment").title("Comments"),
				S.documentTypeListItem("category").title("Categories"),
			])
	);

export default blog;
