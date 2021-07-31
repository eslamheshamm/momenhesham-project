import React from "react";
import { isValid, parseISO, format } from "date-fns";

const ProjectPost = () => {
	if (!isValid(parseISO(dateString))) {
		return "No date";
	}
	const date = parseISO(dateString);
	return (
		<article>
			<figure>
				<img
					src={imageBuilder(coverImage)
						.width(1240)
						.height(640)
						.fit("scale")
						.url()}
					className="rounded-3xl object-cover w-[352px] h-[362px] cursor-pointer "
				/>
			</figure>
			<h2>{title}</h2>
			<time dateTime={dateString} className="text-sm text-[#646464] font-bold">
				{format(date, "LLLL	d, yyyy")}
			</time>
			<ul className="flex">
				{categories &&
					categories.map((category, index) => (
						<li key={index++} className="font-bold mr-4">
							{category}
						</li>
					))}
			</ul>
		</article>
	);
};
