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
			blog,
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
