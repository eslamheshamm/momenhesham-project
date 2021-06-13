import Layout from "../components/layout";
import Head from "next/head";
import SectionOne from "../components/home/sectionOne";
import SectionTwo from "../components/home/sectionTwo";
import SectionThree from "../components/home/sectionThree";
import SectionFour from "../components/home/sectionFour";
export default function Index() {
	return (
		<Layout>
			<Head>
				<title>Home | Momen Hesham</title>
			</Head>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
		</Layout>
	);
}
