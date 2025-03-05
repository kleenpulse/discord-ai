"use client";

import { useRef, useState } from "react";
import BlurImage from "../miscellaneous/blur-image";
import useInView from "@/hooks/util-hooks/useInView";
import Button from "../ui/button";

export const About = () => {
	const aboutTitleRef = useRef<HTMLDivElement>(null);
	const aboutTitleInView = useInView({
		ref: aboutTitleRef,
		once: true,
	});
	const aboutTitleRef2 = useRef<HTMLDivElement>(null);
	const aboutTitleInView2 = useInView({
		ref: aboutTitleRef2,
		once: true,
	});

	const [transformStyle, setTransformStyle] = useState("");
	const itemRef = useRef<HTMLDivElement | null>(null);

	const INTENSITY_X = 10;
	const INTENSITY_Y = -10;

	const handleMouseMove = (e: { clientX: number; clientY: number }) => {
		if (!itemRef.current) return;
		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();

		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * INTENSITY_X;
		const tiltY = (relativeX - 0.5) * INTENSITY_Y;

		const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
		setTransformStyle(newTransform);
	};

	const handleMouseLeave = () => {
		setTransformStyle("");
	};
	return (
		<div
			className="w-full justify-between flex items-center flex-col min-[900px]:flex-row gap-10 py-10 sm:py-20 lg:py-32 px-4 lg:px-8 max-w-[1900px] mx-auto relative"
			style={{
				backgroundImage: "url('/about/checkers.png')",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
			}}
		>
			<div className="bg-gradient-to-b from-[#516ACA] from-0% to-transparent to-15% w-full h-full absolute inset-0 z-20 pointer-events-none hidden md:block" />
			<div
				ref={aboutTitleRef}
				className="flex flex-col max-w-[500px] xl:max-w-[610px] min-[1440px]:max-w-[800px] gap-y-8 justify-between py-2"
			>
				<h2
					id="about"
					style={{
						transform: aboutTitleInView ? "none" : "translateY(100px)",
						opacity: aboutTitleInView ? 1 : 0,
						transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
					className="text-5xl xl:text-6xl font-helvetica-bold  text-white max-w-[438px] min-[1440px]:max-w-[600px] "
				>
					About Clique
				</h2>
				<p
					style={{
						transform: aboutTitleInView ? "none" : "translateY(100px)",
						opacity: aboutTitleInView ? 1 : 0,
						transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
					className="xl:text-xl  min-[1440px]:text-2xl font-helvetica-regular font-light text-white/90  "
				>
					Clique is an advanced AI-powered Discord bot designed to analyze
					crypto contract addresses (CAs) and deliver real-time sentiment
					insights. With cutting-edge technology, it tracks group reactions,
					highlights notable scans, and provides actionable analysis to help you
					stay ahead in the crypto world.
				</p>
				<Button className="w-fit  flex  items-center  font-bold border border-gray-300 rounded-full justify-baseline bg-accent-yellow text-black xl:px-10">
					<span>Join Discord</span>
				</Button>
			</div>
			<div
				ref={aboutTitleRef2}
				className="w-full flex min-[900px]:justify-end justify-center"
				style={{
					transform: aboutTitleInView2 ? "none" : "translateY(100px)",
					opacity: aboutTitleInView2 ? 1 : 0,
					transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
			>
				<div
					ref={itemRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{ transform: transformStyle }}
				>
					<BlurImage
						src="/about/about-card.webp"
						alt="about"
						width={700}
						height={700}
						quality={100}
						draggable={false}
						className="w-full min-[600px]:max-w-[500px] min-[1440px]:max-w-[600px] "
					/>
				</div>
			</div>
		</div>
	);
};
