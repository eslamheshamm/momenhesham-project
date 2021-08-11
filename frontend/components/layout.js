import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import cn from "classnames";
import { Divide as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import Observer from "../assets/observer-logo";
import Footer from "../components/footer";
import Meta from "./meta";
export default function Layout(props) {
	const { children, className } = props;
	const [contact, setContact] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 992 });

	const showContact = () => {
		setContact((contact) => !contact);
		setOpen(false);
	};
	return (
		<div>
			<Meta />
			<main
				className={cn(
					"min-h-screen h-full pb-24 font-space relative",
					className,
					isOpen ? "overflow-hidden" : null
				)}
			>
				<header
					className={cn(
						"pt-[60px] font-NeueLight w-11/12   xl:w-10/12 mx-auto flex justify-between items-center",
						contact ? "text-white" : null
					)}
				>
					<Link href="/">
						<a
							href="/"
							className="flex items-center w-[250px]"
							onClick={() => {
								setContact(false);
								setOpen(false);
							}}
						>
							<Observer svgColor={contact ? "white" : "black"} />
							<div
								className={cn(
									" h-4  mx-3 w-[1px]",
									contact ? "bg-white" : "bg-[#B4B4B4]",
									isOpen && "text-white"
								)}
							></div>
							<span
								className={cn(
									"text-xs sm:text-sm font-normal flex-none",
									contact ? "text-white" : "text-[#B4B4B4] "
								)}
							>
								Momen Hesham
							</span>
						</a>
					</Link>
					<nav>
						{!isDesktop && <Hamburger toggled={isOpen} toggle={setOpen} />}

						{isDesktop && (
							<ul
								className={cn(
									" font-bold uppercase flex items-center",
									className
								)}
							>
								<li className="lg:mr-4 xl:mr-8 mr-2">
									<a
										href="#"
										target="_blank"
										className="flex items-center "
										onClick={() => {
											setContact(false);
										}}
									>
										<Arrow
											className={cn(
												"mr-3",
												contact ? "text-white" : "text-black"
											)}
										/>
										<span>Youtube</span>
									</a>
								</li>
								<li className="lg:mr-4 xl:mr-8 mr-2">
									<Link href="/blog">
										<a
											href="/blog"
											className="flex items-center "
											onClick={() => {
												setContact(false);
											}}
										>
											<span>Blog</span>
										</a>
									</Link>
								</li>{" "}
								<li className="lg:mr-4 xl:mr-8  mr-2">
									<Link href="/projects">
										<a
											href="/projects"
											className="flex items-center "
											onClick={() => {
												setContact(false);
											}}
										>
											<span>Projects</span>
										</a>
									</Link>
								</li>
								<li className="mr-2 lg:mr-4 xl:mr-8">
									<a
										href="#"
										target="_blank"
										className="flex items-center "
										onClick={() => {
											setContact(false);
										}}
									>
										<Arrow className="mr-3" />
										<span>freebies</span>
									</a>
								</li>
								<li className="mr-2 lg:mr-4 xl:mr-8">
									<a
										href="#"
										target="_blank"
										className="flex items-center "
										onClick={() => {
											setContact(false);
										}}
									>
										<Arrow className="mr-3" />
										<span>résume</span>
									</a>
								</li>
								<li>
									<button
										className="py-5 px-10 font-NeueBold text-xs bg-[#2B2B2B] text-white rounded-3xl"
										onClick={showContact}
									>
										Let’s Work Together?
									</button>
								</li>
							</ul>
						)}
					</nav>
				</header>
				<div className={cn(isOpen && "hidden", contact && "hidden")}>
					{children}
				</div>
				{contact && <div className={cn("min-h-screen bg-area")}></div>}
				{isOpen ? (
					<div className="navbarAnimation flex flex-col items-center w-10/12 mx-auto justify-center h-[75vh]">
						<ul
							className={cn(
								" text-xl font-bold font-NeueLight uppercase flex flex-col items-start justify-center",

								isOpen && contact && "text-white"
							)}
						>
							<li className="">
								<a
									href="#"
									target="_blank"
									className="flex items-center "
									onClick={() => {
										setContact(false);
									}}
								>
									<Arrow
										className={cn(
											"mr-3",
											contact ? "text-white" : "text-black"
										)}
									/>
									<span>Youtube</span>
								</a>
							</li>
							<li className="mt-6">
								<Link href="/blog">
									<a
										href="/blog"
										className="flex items-center "
										onClick={() => {
											setContact(false);
											setOpen(false);
										}}
									>
										<span>Blog</span>
									</a>
								</Link>
							</li>{" "}
							<li className="  mt-6">
								<Link href="/projects">
									<a
										href="/projects"
										className="flex items-center "
										onClick={() => {
											setContact(false);
											setOpen(false);
										}}
									>
										<span>Projects</span>
									</a>
								</Link>
							</li>
							<li className=" mt-6">
								<a
									href="#"
									target="_blank"
									className="flex items-center "
									onClick={() => {
										setContact(false);
										setOpen(false);
									}}
								>
									<Arrow className="mr-3" />
									<span>freebies</span>
								</a>
							</li>
							<li className=" mt-6">
								<a
									href="#"
									target="_blank"
									className="flex items-center "
									onClick={() => {
										setContact(false);
										setOpen(false);
									}}
								>
									<Arrow className="mr-3" />
									<span>résume</span>
								</a>
							</li>
							<li className=" mt-6">
								<button
									className="py-5 px-10 font-NeueBold text-sm bg-[#2B2B2B] text-white rounded-3xl"
									onClick={showContact}
								>
									Let’s Work Together?
								</button>
							</li>
						</ul>
					</div>
				) : null}
				<section
					className={cn(
						"text-white flex flex-col items-center justify-center h-[75vh] text-center",
						isOpen && "hidden",
						!contact && "hidden "
					)}
				>
					{contact && (
						<Head>
							<title>Contact us | Momen Hesham</title>
						</Head>
					)}
					<h2 className="font-space text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
						Wanna work together?
					</h2>
					<h3 className="font-space text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
						I’d love to hear about <br className="md:hidden" /> your future
						projects.
					</h3>
					<p className="font-NeueLight text-2xl sm:text-3xl  lg:text-5xl mb-3">
						<a href="mailto:momen@observer.studio?subject = Feedback&body = Message">
							momen@observer.studio
						</a>
					</p>
					<Signture />
				</section>
				<Footer
					svgColor={contact ? "white" : "black"}
					className={contact ? "text-white" : null}
				/>
			</main>
		</div>
	);
}

function Arrow(props) {
	return (
		<svg width={16} height={16} viewBox="0 0 11 10" fill="none" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5.5A.5.5 0 015 0h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H5a.5.5 0 01-.5-.5z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.354.146a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
				fill="currentColor"
			/>
		</svg>
	);
}

function Signture(props) {
	return (
		<svg
			width="243"
			height="37"
			viewBox="0 0 243 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M241.47 5.69228C241.206 5.02225 240.693 4.28094 239.93 3.64655C238.398 2.34926 236.01 1.53667 233.088 1.20166C230.151 0.859513 226.622 0.959305 222.481 1.45114C220.25 1.70774 215.674 2.28511 209.508 3.51112C203.343 4.73 195.594 6.57614 186.977 9.03529C178.366 11.5016 168.843 14.4953 159.242 18.1306C154.43 19.9268 149.755 22.1365 145.057 24.4531C143.874 25.0304 142.698 25.6078 141.458 26.1495C140.802 26.4204 140.289 26.6628 139.312 26.9407C138.428 27.1831 137.509 27.29 136.66 27.0192C135.798 26.7554 135.164 26.0355 134.8 25.23C134.615 24.8237 134.479 24.3747 134.379 23.9256C134.33 23.6975 134.287 23.4694 134.251 23.2413L134.173 22.6853C134.002 21.3025 133.959 19.991 133.909 18.6794L133.952 15.5075C133.973 14.4169 134.009 13.4618 133.888 12.5137C133.781 11.58 133.538 10.689 133.125 10.0546C132.712 9.4202 132.134 9.04242 131.314 8.89273C130.495 8.74305 129.518 8.82858 128.542 9.03529C127.558 9.242 126.56 9.56276 125.569 9.93342C123.581 10.6819 121.613 11.6299 119.66 12.6349C111.848 16.6979 104.171 21.5734 95.9669 25.4154C93.914 26.3634 91.8184 27.2401 89.6515 27.9173C87.4917 28.573 85.2321 29.1005 82.9441 28.9009C81.8107 28.794 80.6702 28.459 79.7365 27.789C78.7956 27.1332 78.1184 26.1709 77.6551 25.1588C76.7499 23.1059 76.5289 20.8677 76.4077 18.6937C76.3578 17.6031 76.3436 16.5125 76.3578 15.422C76.3792 14.3599 76.4434 13.198 75.9515 12.1573C75.5025 11.1024 74.476 10.3611 73.4068 10.0617C72.3305 9.74809 71.2186 9.72671 70.1351 9.79799C67.9682 9.96193 65.9011 10.5179 63.8981 11.1594C61.9023 11.8081 59.9706 12.5779 58.0888 13.3976C50.5974 16.7335 43.9042 20.7608 37.9737 24.8309C36.4911 25.8573 35.0584 26.8908 33.6898 27.9387C32.9913 28.4661 32.3355 29.0079 31.7011 29.4712C31.0596 29.9487 30.4038 30.3764 29.748 30.7613C28.4508 31.5169 27.0822 32.0729 25.9702 32.0658C24.8725 32.0658 24.1669 31.5383 23.5752 30.5546C23.005 29.5852 22.67 28.345 22.4561 27.1403C22.2423 25.9214 22.1496 24.6954 22.1069 23.5122C22.0285 21.1386 22.1425 18.936 22.3065 16.9758C22.3849 15.9922 22.4775 15.0656 22.5773 14.2031L22.9408 11.2521C23.0905 10.0118 23.3115 8.79294 23.3329 7.83067C23.3543 6.87552 23.2616 6.19836 23.1262 5.68515C23.0192 5.2646 22.8767 4.88682 22.6842 4.5518C22.4918 4.21679 22.2494 3.8889 21.8289 3.61804C21.3869 3.34717 20.9308 3.26877 20.553 3.25451C20.1681 3.24026 19.7974 3.28302 19.4196 3.36856C18.6641 3.54676 17.8443 3.94592 17.0032 4.59457C16.155 5.22896 15.3139 6.06293 14.5085 6.93254C14.1022 7.36735 13.7101 7.80928 13.3252 8.25834L12.6053 9.09232C12.1847 9.59127 11.7784 10.076 11.3935 10.5535C10.6166 11.5087 9.91092 12.4282 9.24802 13.3121C6.6178 16.8475 4.7574 19.7415 3.43872 22.0581C0.822759 26.6913 0.444977 28.9793 1.67099 29.7278C2.90413 30.4833 5.21359 28.1169 7.26644 25.6149C9.3193 23.1059 11.1227 20.4543 11.1227 20.4543C12.6766 18.1733 14.2661 15.9209 15.9198 13.7683C16.3332 13.2265 16.7466 12.6991 17.1672 12.1787L17.4951 11.7867C17.5806 11.6869 17.6733 11.5871 17.7802 11.5158C17.8301 11.4802 17.9228 11.4588 17.9441 11.5372C17.9655 11.6014 17.9584 11.6655 17.9513 11.7297L17.9014 12.1645C17.6376 14.98 17.4523 17.874 17.4594 20.7964C17.4666 22.2648 17.5236 23.7474 17.6804 25.2585C17.8372 26.7697 18.0796 28.3164 18.5714 29.9274C18.8209 30.7328 19.1416 31.5597 19.6121 32.4008C20.0825 33.2347 20.7169 34.1115 21.6435 34.8528C22.5559 35.5941 23.7962 36.1144 24.9652 36.2427C26.1413 36.3853 27.2105 36.2285 28.13 35.979C29.9833 35.4587 31.4017 34.6176 32.7133 33.7408C34.0248 32.8712 35.2009 31.8448 36.2131 31.0393C38.3301 29.3429 40.5398 27.732 42.7922 26.1781C47.3114 23.0916 52.0087 20.2405 56.8486 17.7813C59.2721 16.5553 61.7312 15.4362 64.2046 14.5238C65.4378 14.0676 66.6852 13.6756 67.9041 13.3762C69.1158 13.0768 70.3276 12.8844 71.354 12.8915C71.8601 12.8915 72.3163 12.9557 72.6228 13.0483C72.9435 13.1481 73.0647 13.2479 73.1217 13.3121C73.1788 13.3762 73.2643 13.4974 73.3284 13.8182C73.357 13.9678 73.3783 14.1603 73.3855 14.3741L73.3926 15.3792C73.4068 16.8262 73.4496 18.2874 73.5922 19.7985C73.7347 21.3097 73.9557 22.8635 74.4475 24.4959C74.9465 26.0996 75.7662 27.9101 77.3771 29.35C78.1612 30.0628 79.1235 30.6116 80.0858 30.9609C81.0552 31.3173 82.0174 31.467 82.9298 31.5312C84.7546 31.6309 86.3869 31.3601 87.9123 31.0037C89.4448 30.633 90.8775 30.1483 92.2674 29.6137C95.0402 28.5445 97.6419 27.2472 100.158 25.9143C102.681 24.5743 105.141 23.1772 107.571 21.7587C112.432 18.936 117.187 15.9779 121.984 13.4831C124.365 12.2643 126.831 11.1167 129.048 10.6248C130.131 10.3682 131.115 10.411 131.436 10.5892C131.607 10.6676 131.692 10.7317 131.842 10.9313C131.984 11.1309 132.141 11.4802 132.255 11.9292C132.369 12.3783 132.448 12.9129 132.483 13.476C132.505 13.7611 132.512 14.0534 132.512 14.3528V15.3792C132.512 16.7834 132.512 18.1876 132.548 19.6346C132.562 20.3616 132.59 21.0958 132.64 21.8585C132.669 22.2434 132.697 22.6355 132.747 23.0417L132.79 23.3839L132.868 23.8686C132.925 24.1965 132.997 24.5244 133.082 24.838C133.424 26.1068 134.073 27.2259 135.099 27.9315C136.133 28.6515 137.402 28.851 138.685 28.6586C139.326 28.5659 139.975 28.3877 140.602 28.1739C141.016 28.0313 141.372 27.8959 141.736 27.7533C142.448 27.4682 143.118 27.1688 143.774 26.8766L147.602 25.1017C150.111 23.9399 152.641 22.8137 155.143 21.7872C160.197 19.77 165.486 18.0165 170.761 16.3557C181.331 13.0626 192.066 10.1758 202.872 7.93046C202.48 8.00886 199.201 8.60049 193.706 9.81937C200.691 8.13717 207.726 6.66881 214.776 5.65664C218.297 5.15768 221.832 4.7799 225.318 4.64446C227.057 4.58031 228.789 4.58031 230.479 4.68723C232.161 4.79415 233.815 5.01512 235.269 5.43567C235.247 5.42854 237.079 5.90611 238.156 6.59753C238.704 6.93254 239.104 7.28894 239.488 7.72375C239.881 8.13717 240.208 8.60049 240.693 8.60049C241.156 8.60049 241.584 8.28686 241.712 7.39586C241.777 6.95393 241.741 6.3623 241.47 5.69228Z"
				fill="white"
				stroke="black"
			/>
		</svg>
	);
}
