import React from "react";
import { imageBuilder } from "../../lib/sanity";

const Image = ({ image, width = 1200, fit = "fill" }) => {
	console.log(image, "image");
	const imgUrl =
		image && imageBuilder(image).width(width).fit(fit).auto("format").url();

	return imgUrl ? <img src={imgUrl} alt={image.alt || ""} /> : <></>;
};

export default Image;
