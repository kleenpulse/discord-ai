import { useEffect, useRef, useState } from "react";
import BlurImage from "./blur-image";
import VerifiedIcon from "../icons/verified-icon";
import AnimatedArrow from "./animated-arrow";
import { useArrow } from "@/hooks/use-arrow";
import { DOGS } from "@/lib/dogs";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { usePictureInView } from "@/hooks/use-picture-inview";
import useInView from "@/hooks/util-hooks/useInView";

const Gallery = () => {
	const [selected, setSelected] = useState(1);
	const updateIsAnimated = useArrow((state) => state.updateIsAnimated);
	const isPictureInView = usePictureInView((state) => state.isPictureInView);
	const isAnimated = useArrow((state) => state.isAnimated);
	const search = useSearchParams();
	const dogParam = search.get("dog");
	const router = useRouter();
	const galleryRef = useRef<HTMLHeadingElement>(null);
	const profilePicRef = useRef<HTMLHeadingElement>(null);
	const profilePicInView = useInView({
		ref: profilePicRef,
		once: true,
	});
	const galleryInView = useInView({
		ref: galleryRef,
		once: true,
	});

	useEffect(() => {
		if (dogParam) {
			setSelected(parseInt(dogParam));
		}
	}, [dogParam]);

	const handleImageDownload = () => {
		if (!selected || selected < 1) return;
		updateIsAnimated(!isAnimated);

		const link = document.createElement("a");
		link.href = DOGS[selected - 1].image;
		link.download = DOGS[selected - 1].image
			.replace("/", "")
			.replace("dogs", "sandor");
		link.click();
	};

	return (
		<div
			className="w-full xl:pb-20 py-10 "
			style={{
				backgroundImage: "url('/gallery-bg.webp')",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
			}}
		>
			<div className="flex flex-col gap-y-6 lg:gap-y-10  mx-auto max-w-[1900px]">
				<div
					ref={profilePicRef}
					style={{
						transform: profilePicInView ? "none" : "translateY(100px)",
						opacity: profilePicInView ? 1 : 0,
						transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
					className={cn(
						"flex flex-col md:flex-row w-full justify-between items-center sticky top-0 z-20 transition-all  px-3 min-[500px]:px-5 md:px-8 gap-y-2 min-[1440px]:px-12",
						isPictureInView
							? "bg-white/0 backdrop-blur-0 duration-300 delay-0"
							: "bg-white/10 backdrop-blur-xl duration-700 delay-200 py-1"
					)}
				>
					<div className="flex items-center gap-x-2 md:gap-x-4 xl:gap-x-8">
						<span
							className={cn(
								" flex-shrink-0 bg-white p-1 rounded-full relative grid place-items-center transition-all ",
								isPictureInView
									? "size-[100px]  sm:size-[191px] duration-300 delay-0"
									: "size-[50px]  sm:size-[100px] duration-500 delay-0"
							)}
						>
							<BlurImage
								src={DOGS[selected - 1].image}
								alt="dog"
								width={191}
								height={191}
								className="rounded-full size-full"
							/>
							<span
								className={cn(
									"absolute bottom-1 right-1  sm:bottom-2 sm:right-2 bg-white rounded-full transition-all",
									isPictureInView
										? "size-5 sm:size-10 duration-300 delay-0"
										: "size-3 sm:size-5 duration-500 delay-0"
								)}
							/>
						</span>
						<div
							className={cn(
								"flex flex-col  max-w-[300px] lg:max-w-[400px] min-[1440px]:max-w-[497px] transition-all",
								isPictureInView
									? "gap-y-2 lg:gap-y-4 duration-300 delay-0"
									: "gap-y-1 lg:gap-y-2 duration-500 delay-0"
							)}
						>
							<h3
								className={cn(
									"transition-all text-white flex items-center gap-x-2",
									isPictureInView
										? "text-2xl sm:text-3xl duration-300 delay-0"
										: "text-xl sm:text-2xl duration-500 delay-0"
								)}
							>
								$SANDOR <VerifiedIcon />
							</h3>
							<p
								className={cn(
									"font-roboto ",
									isPictureInView
										? "lg:text-xl text-xs min-[400px]:text-sm sm:text-base duration-300 delay-0"
										: "text-xs md:text-base duration-500 delay-0"
								)}
							>
								Click to select the $Sandor you want as profile picture then
								click download
							</p>
						</div>
					</div>

					<div className=" flex justify-end gap-x-10  py-7 relative min-w-[300px]">
						<p className="absolute top-0 left-0">click to download</p>
						<AnimatedArrow className="-mt-2" />
						<button
							onClick={handleImageDownload}
							className="text-black bg-white px-4 py-1 rounded-full flex items-center h-8 justify-end mt-2 active:scale-95 hover:bg-black hover:text-white transition"
						>
							Download
						</button>
					</div>
				</div>

				<div
					ref={galleryRef}
					style={{
						transform: galleryInView ? "none" : "translateY(100px)",
						opacity: galleryInView ? 1 : 0,
						transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
					className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] w-full gap-2 grid-auto-flow-dense px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 overflow-x-auto"
				>
					{DOGS.map((dog) => (
						<div
							key={dog.id}
							className={cn(
								" rounded-md aspect-square ",
								selected === dog.id ? " bg-white p-1" : "cursor-pointer"
							)}
							onClick={() => {
								router.replace(`/?dog=${dog.id}`, { scroll: false });
								setSelected(dog.id);
							}}
						>
							<BlurImage
								src={dog.image}
								alt="dog"
								width={160}
								height={160}
								className="rounded-md object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
