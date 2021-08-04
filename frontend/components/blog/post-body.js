import markdownStyles from "../markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../serializers";
export default function PostBody({ content }) {
	return (
		<>
			<BlockContent
				serializers={serializers}
				blocks={content}
				projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
				dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
				className={markdownStyles.markdown}
			/>
		</>
	);
}
