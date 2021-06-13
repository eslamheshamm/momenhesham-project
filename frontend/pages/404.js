import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

const ComingSoon = () => {
	return (
		<Layout>
			<Head>
				<title>Coming Soon | Momen Hesham</title>
			</Head>
			<section className="min-h-screen flex flex-col justify-center items-center my-10 md:my-0">
				<Image
					src="/coming-soon.svg"
					width={345}
					height={272}
					alt="coming soon"
				/>
				<h2 className=" font-NeueBold text-4xl mt-8 mb-4">Work in Progress.</h2>
				<p className=" font-Neue ">Designer life is messy</p>
			</section>
		</Layout>
	);
};
export default ComingSoon;
