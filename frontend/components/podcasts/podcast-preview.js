import { imageBuilder } from "../../lib/sanity";
export default function PodcastPreview({ coverImage, link, title }) {
	return (
		<article className="w-full h-full">
			<a href={`${link}`} target="_blank" rel="noopener noreferrer">
				<img
					src={imageBuilder(coverImage).url()}
					className="   w-full h-full object-cover "
				/>
			</a>
			<h2></h2>
		</article>
	);
}
