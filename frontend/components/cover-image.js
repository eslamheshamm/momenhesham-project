import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImage({ title, imageObject, slug }) {
	const image = (
		<figure className="aspect-w-2 aspect-h-1">
			<img
				alt={`Cover Image for ${title}`}
				className={cn("rounded-2xl object-cover m-0", {
					" w-full": slug,
				})}
				src={imageBuilder(imageObject)
					.width(1240)
					.height(640)
					.fit("fill")
					.url()}
			/>
		</figure>
	);

	return (
		<>
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</>
	);
}
