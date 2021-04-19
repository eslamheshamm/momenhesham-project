import Link from "next/link";
import Observer from "../assets/observer-logo";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import styles from "./header.module.css";
import cn from "classnames";
const MenuItems = ({ className }) => {
	return (
		<nav>
			<ul className={cn("lg:text-lg xl:text-xl font-bold", className)}>
				<li className="lg:mr-8">
					<a href="#" target="_blank" className="flex items-center uppercase">
						<Arrow className="mr-3" />
						<span>Youtube</span>
					</a>
				</li>
				<li className="lg:mr-8 mt-2 lg:mt-0">
					<Link href="/blog">
						<a href="/blog" className="flex items-center uppercase">
							<span>Blog</span>
						</a>
					</Link>
				</li>{" "}
				<li className="lg:mr-8 mt-2 lg:mt-0">
					<Link href="/case-studies">
						<a href="/case-studies" className="flex items-center uppercase">
							<span>Case Studies</span>
						</a>
					</Link>
				</li>{" "}
				<li className="lg:mr-8 mt-2 lg:mt-0">
					<Link href="/freebies">
						<a href="/freebies" className="flex items-center uppercase">
							<span>Freebies</span>
						</a>
					</Link>
				</li>{" "}
				<li className="mt-2 lg:mt-0">
					<a href="#" target="_blank" className="flex items-center uppercase">
						<Arrow className="mr-3" />
						<span>résume</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default function Header() {
	const [isOpen, setOpen] = useState(false);
	return (
		<header
			className={cn(
				"mt-[60px] font-space   w-11/12 xl:w-10/12 mx-auto lg:flex justify-between items-center"
			)}
		>
			<div className="flex justify-between">
				<Link href="/">
					<a href="/" className="flex items-center w-[250px]">
						<Observer />
						<div className="border-l-2 h-[16px] bg-[#B4B4B4] mx-3 w-1"></div>
						<span className="text-[#B4B4B4] text-xs sm:text-sm font-normal flex-none">
							Momen Hesham
						</span>
					</a>
				</Link>
				<div className="lg:hidden">
					<Hamburger toggled={isOpen} toggle={setOpen} duration={0.9} />
				</div>
			</div>
			<div className="flex flex-col items-end">
				{isOpen ? (
					<MenuItems className={cn("flex flex-col lg:hidden", styles.ele)} />
				) : null}
				<MenuItems className="hidden lg:flex" />
			</div>
		</header>
	);
}
function Arrow(props) {
	return (
		<svg width={16} height={16} viewBox="0 0 11 10" fill="none" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5.5A.5.5 0 015 0h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H5a.5.5 0 01-.5-.5z"
				fill="#000"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.354.146a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
				fill="#000"
			/>
		</svg>
	);
}
