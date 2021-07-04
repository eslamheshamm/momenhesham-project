import S from "@sanity/desk-tool/structure-builder";
import blog from "./src/structure/blog";

const hiddenDocTypes = (listItem) =>
	!["post", "category", "comment"].includes(listItem.getId());

export default () =>
	S.list()
		.title("Base")
		.items([
			// S.listItem()
			// 	.title("Blog")
			// 	.child(S.document().schemaType("post").documentId("post")),
			// S.listItem()
			// 	.title("Widgets")
			// 	.child(S.document().schemaType("widget").documentId("widget")),
			blog,
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
