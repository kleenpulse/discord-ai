"use client";

import { useNavState } from "@/hooks/use-nav-state";
import { NAV_LINKS } from "@/lib/constants";
import { NavStateProps } from "@/types/nav-states.types";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { scroller } from "react-scroll";

const Footer = () => {
	const { setActiveLink } = useNavState();
	const handleLinkClick = (link: NavStateProps["activeLink"]) => {
		setActiveLink(link);

		const linkEl = document.getElementById(link);
		if (linkEl) {
			scroller.scrollTo(link, {
				duration: 1500,
				delay: 100,
				smooth: "easeInOutCubic",
				isDynamic: true,
				offset: -70,
			});
		}
	};

	return (
		<footer className="w-full py-5 flex justify-center sm:justify-between items-center relative z-20 text-white px-4 xl:px-10 max-w-[1900px] mx-auto">
			<p className="flex items-center gap-x-2">
				<b>© AI-Powered</b>
				<span>2025 all right reserved</span>
			</p>
			<div className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
				{NAV_LINKS.map((link) => (
					<button
						key={link.link}
						onClick={() => handleLinkClick(link.link)}
						className="relative w-fit whitespace-nowrap text-neutral-100 transition-colors duration-300 hover:text-accent-main font-inter font-light hover:text-accent-yellow"
					>
						<span>{link.name}</span>
					</button>
				))}
			</div>
			<div className="hidden sm:flex items-center gap-x-2 xl:gap-x-4">
				<a
					href="https://x.com/CoterieAI"
					target="_blank"
					className="hover:scale-125 transition-transform duration-300 hover:text-accent-yellow"
				>
					<FaTwitter className="size-4 xl:size-6" />
				</a>
				<a
					href="https://t.me/coterie_ai_bot"
					target="_blank"
					className="hover:scale-125 transition-transform duration-300 hover:text-accent-yellow"
				>
					<FaTelegramPlane className="size-4 xl:size-6" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
