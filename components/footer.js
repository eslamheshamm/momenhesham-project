export default function Footer() {
	return (
		<footer className="w-10/12 mx-auto flex items-center justify-center sm:justify-between my-[50px]">
			<h2 className=" font-bold hidden sm:block">© 2020 Momen Hesham</h2>
			<ul className="flex">
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Dribble />
					</a>
				</li>
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Instagram />
					</a>
				</li>
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Linkedin />
					</a>
				</li>
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Medium />
					</a>
				</li>
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Twitter />
					</a>
				</li>
				<li className="mr-3">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Pinterest />
					</a>
				</li>
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Email />
					</a>
				</li>
			</ul>
		</footer>
	);
}
function Dribble(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M8 1.5A6.507 6.507 0 001.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5S11.584 1.5 8 1.5zm4.298 2.997a5.52 5.52 0 011.254 3.46c-.183-.04-2.02-.412-3.866-.179l-.119-.286c-.115-.27-.239-.54-.369-.804 2.052-.84 2.983-2.032 3.1-2.191zM8 2.457c1.41 0 2.7.529 3.68 1.398-.1.142-.936 1.265-2.91 2.006a29.386 29.386 0 00-2.072-3.25A5.532 5.532 0 018 2.456zm-2.36.527c.146.2 1.138 1.577 2.057 3.211-2.597.69-4.885.68-5.133.677A5.575 5.575 0 015.64 2.984zM2.447 8.008c0-.056.002-.114.004-.17.242.004 2.932.039 5.706-.791.16.31.31.626.45.942a5.05 5.05 0 00-.219.066c-2.864.928-4.387 3.451-4.514 3.665a5.533 5.533 0 01-1.427-3.712zM8 13.559a5.518 5.518 0 01-3.408-1.171c.1-.205 1.224-2.376 4.355-3.468l.036-.012a23.06 23.06 0 011.184 4.21A5.476 5.476 0 018 13.56zm3.102-.948a23.83 23.83 0 00-1.079-3.958c1.741-.278 3.27.178 3.458.238a5.555 5.555 0 01-2.38 3.72z"
				fill="#000"
			/>
		</svg>
	);
}
function Instagram(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M8 4.795A3.2 3.2 0 004.795 8 3.2 3.2 0 008 11.205 3.2 3.2 0 0011.205 8 3.2 3.2 0 008 4.795zm0 5.288A2.087 2.087 0 015.917 8c0-1.147.936-2.083 2.083-2.083 1.147 0 2.083.936 2.083 2.083A2.087 2.087 0 018 10.083zm3.336-6.166a.747.747 0 100 1.497.746.746 0 00.53-1.278.748.748 0 00-.53-.219zM14.246 8c0-.862.009-1.717-.04-2.578-.048-1-.276-1.887-1.008-2.619-.732-.733-1.618-.96-2.618-1.008-.863-.048-1.717-.04-2.578-.04-.863 0-1.718-.008-2.578.04-1 .049-1.888.277-2.62 1.008-.732.733-.959 1.619-1.007 2.619-.048.863-.04 1.717-.04 2.578 0 .861-.008 1.717.04 2.578.048 1 .277 1.888 1.008 2.619.733.733 1.619.96 2.619 1.008.862.048 1.717.04 2.578.04.862 0 1.717.008 2.578-.04 1-.049 1.887-.277 2.618-1.008.733-.733.96-1.619 1.008-2.619.05-.86.04-1.715.04-2.578zm-1.374 3.684a1.985 1.985 0 01-.472.716c-.22.22-.431.358-.716.472-.821.327-2.773.253-3.684.253-.91 0-2.864.074-3.686-.251a1.986 1.986 0 01-.715-.472 1.999 1.999 0 01-.472-.716c-.325-.823-.252-2.775-.252-3.686 0-.91-.073-2.864.252-3.686.114-.284.251-.497.472-.715a2.02 2.02 0 01.715-.472C5.136 2.802 7.09 2.875 8 2.875s2.864-.073 3.686.252c.284.114.497.251.716.472a2 2 0 01.472.715c.324.822.251 2.775.251 3.686s.073 2.863-.253 3.684z"
				fill="#000"
			/>
		</svg>
	);
}
function Linkedin(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M13.245 1.75H2.755c-.555 0-1.005.45-1.005 1.005v10.49c0 .555.45 1.005 1.005 1.005h10.49c.555 0 1.005-.45 1.005-1.005V2.755c0-.555-.45-1.005-1.005-1.005zm0 11.5c-6.997-.002-10.495-.003-10.495-.005.002-6.997.003-10.495.005-10.495 6.997.002 10.495.003 10.495.005-.002 6.997-.003 10.495-.005 10.495zM3.603 6.436h1.855v5.966H3.603V6.436zm.928-.816a1.076 1.076 0 10-.002-2.152 1.076 1.076 0 00.002 2.152zm3.942 3.83c0-.778.149-1.531 1.113-1.531.95 0 .964.889.964 1.581v2.902h1.853V9.13c0-1.607-.347-2.843-2.223-2.843-.902 0-1.507.496-1.755.965H8.4v-.816H6.62v5.966h1.853V9.45z"
				fill="#000"
			/>
		</svg>
	);
}
function Medium(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M13.042 4.372l.958-.92V3.25h-3.317L8.319 9.162 5.629 3.25H2.153v.202L3.27 4.805c.11.1.166.247.152.393v5.318a.605.605 0 01-.161.526L2 12.578v.199h3.572v-.202l-1.26-1.531a.625.625 0 01-.173-.527v-4.6l3.136 6.863h.364l2.697-6.863v5.467c0 .144 0 .174-.094.27l-.97.941v.202h4.706v-.202l-.936-.92a.283.283 0 01-.106-.269V4.641a.283.283 0 01.106-.27z"
				fill="#000"
			/>
		</svg>
	);
}

function Twitter(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M14.5 3.973a5.343 5.343 0 01-1.535.413c.557-.33.973-.853 1.172-1.469a5.26 5.26 0 01-1.69.644 2.657 2.657 0 00-1.947-.842 2.664 2.664 0 00-2.664 2.665c0 .207.025.413.065.611a7.572 7.572 0 01-5.494-2.789 2.646 2.646 0 00-.362 1.346c0 .925.47 1.74 1.187 2.22a2.687 2.687 0 01-1.204-.34v.034c0 1.295.915 2.368 2.136 2.615-.23.06-.465.09-.702.09-.173 0-.337-.016-.503-.04a2.67 2.67 0 002.49 1.849 5.34 5.34 0 01-3.307 1.139c-.224 0-.43-.008-.644-.033A7.544 7.544 0 005.59 13.28c4.9 0 7.582-4.06 7.582-7.583 0-.115 0-.23-.008-.346A5.74 5.74 0 0014.5 3.973z"
				fill="#000"
			/>
		</svg>
	);
}

function Pinterest(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M7.993 1.333a6.66 6.66 0 00-2.427 12.865c-.058-.527-.11-1.338.023-1.912.121-.52.781-3.311.781-3.311s-.199-.4-.199-.99c0-.925.537-1.616 1.205-1.616.569 0 .843.426.843.938 0 .572-.364 1.426-.551 2.218-.157.662.332 1.203.986 1.203 1.183 0 2.094-1.248 2.094-3.05 0-1.595-1.146-2.71-2.782-2.71-1.896 0-3.008 1.422-3.008 2.89 0 .573.22 1.187.496 1.52a.2.2 0 01.046.191c-.051.21-.164.663-.185.756-.03.122-.097.148-.223.09C4.26 10.026 3.74 8.81 3.74 7.833c0-2.101 1.526-4.03 4.401-4.03 2.31 0 4.106 1.645 4.106 3.846 0 2.296-1.447 4.142-3.456 4.142-.675 0-1.31-.35-1.527-.764l-.415 1.583c-.15.579-.556 1.304-.827 1.746A6.66 6.66 0 107.993 1.334z"
				fill="#000"
			/>
		</svg>
	);
}

function Email(props) {
	return (
		<svg width={32} height={32} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zm-1.1 1L8 7.39 3.1 4h9.8zM2 12V4.455L7.715 8.41a.5.5 0 00.57 0L14 4.455V12H2z"
				fill="#000"
			/>
		</svg>
	);
}
