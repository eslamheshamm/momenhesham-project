import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
	return (
		<main className=" min-h-screen h-full pb-12 font-space relative">
			<Meta />
			<Header />
			<div className="h-full">{children}</div>
			<Footer />
		</main>
	);
}
