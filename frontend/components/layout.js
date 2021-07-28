import Footer from "../components/footer";
import Header from "./header";

export default function Layout({ children }) {
	return (
		<main className=" min-h-screen h-full pb-24 font-space relative">
			<Header />
			<div className="h-full">{children}</div>
			<Footer />
		</main>
	);
}
