import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<Header />
			<main className="min-h-full lg:min-h-screen font-space">{children}</main>
			<Footer />
		</>
	);
}
