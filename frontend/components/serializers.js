import React from "react";
// import Figure from "./Figure";
import Image from "./objects/Image";

const serializers = {
	types: {
		image: ({ node }) => (
			<Image image={node} width={node.width} fit={node.fit} />
		),
	},
};

export default serializers;
