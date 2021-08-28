import Head from "next/head";

export default function Meta() {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-config" content="/browserconfig.xml" />
			<meta name="theme-color" content="#000" />
			{/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
			<meta name="description" content={`Momen Hesham Portfolio`} />
		</Head>
	);
}
