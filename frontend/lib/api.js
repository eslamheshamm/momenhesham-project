import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
	const slugs = new Set();
	return posts.filter((post) => {
		if (slugs.has(post.slug)) {
			return false;
		} else {
			slugs.add(post.slug);
			return true;
		}
	});
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  "categories": categories[]->title,
  'slug': slug.current,
  'coverImage': mainImage,
`;
const BlogPostPreview = ` 
	_id,
	title,
	excerpt,
	'slug': slug.current,
	'coverImage': mainImage,
`;
const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
	const data = await getClient(true).fetch(
		`*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
		{ slug }
	);
	return data[0];
}

export async function getAllPostsWithSlug() {
	const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
	return data;
}

export async function getAllPostsForHome(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "post"] | order(publishedAt desc){
      ${BlogPostPreview}
    }`);
	return getUniquePosts(results);
}
export async function getAllPostsForDesign(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type=="post" && references(*[_type=="category" && title == "Design"]._id)] | order(date desc, _updatedAt desc){
      ${BlogPostPreview}
    }`);
	return getUniquePosts(results);
}
export async function getAllPostsForPhilosophy(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type=="post" && references(*[_type=="category" && title == "Philosophy"]._id)] | order(date desc, _updatedAt desc){
      ${BlogPostPreview}
    }`);
	return getUniquePosts(results);
}
export async function getAllPostsForPersonal(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type=="post" && references(*[_type=="category" && title == "Personal"]._id)] | order(date desc, _updatedAt desc){
      ${BlogPostPreview}
    }`);
	return getUniquePosts(results);
}
export async function getPostAndMorePosts(slug, preview) {
	const curClient = getClient(preview);
	const [post, morePosts] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
		curClient.fetch(
			`*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
			{ slug }
		),
	]);
	return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getWidgetPost(slug, preview) {
	const curClient = getClient(preview);
	const [post] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "widget" && slug.current == $slug] | order(_updatedAt desc) {
				_id,
				title,
				excerpt,
				'slug': slug.current,
				body,
				excerpt

      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
	]);
	return { post };
}
export async function getAllWidgets(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "widget"] | order(publishedAt desc){
      _id,
	  excerpt,
	  title,
	  'slug': slug.current,
	  body,
	  excerpt
    }`);
	return getUniquePosts(results);
}
export async function getAllWidgetsWithSlug() {
	const data = await client.fetch(
		`*[_type == "widget"]{ 'slug': slug.current }`
	);
	return data;
}

export async function getProjectPost(slug, preview) {
	const curClient = getClient(preview);
	const [post] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) {
				_id,
				title,
				'slug': slug.current,
				body,
				"links": links[],
				 publishedAt,
				'coverImage': mainImage

      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
	]);
	return { post };
}
export async function getAllProjectsWithSlug() {
	const data = await client.fetch(
		`*[_type == "project"]{ 'slug': slug.current }`
	);
	return data;
}
export async function getAllProjects(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "project"] | order(publishedAt desc){
      _id,
	  'slug': slug.current,
	  'coverImage': mainImage,

    }`);
	return getUniquePosts(results);
}

export async function getAllPodcasts(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "podcast"] | order(publishedAt desc){
      _id,
	  link,
	  'coverImage': mainImage,

    }`);
	return getUniquePosts(results);
}
