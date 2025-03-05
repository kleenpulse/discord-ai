import React from "react";

const WelcomeTemplate = () => {
	return (
		<div>
			<div
				id="banner-1x"
				className="fixed left-0 top-0 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
			/>

			<div
				id="banner-2x"
				className="fixed left-1/4 top-0 z-[9999] flex min-h-[100dvh] w-1/4 items-center justify-end bg-neutral-950  font-bold text-white text-[14vw] min-[500px]:text-[12vw] sm:text-[14vw] 2xl:text-[16vw]"
			>
				$SAN
			</div>

			<div
				id="banner-3x"
				className="fixed left-2/4 top-0 z-[99999] flex min-h-[100dvh] w-1/4 items-center bg-neutral-950 font-bold text-white text-[14vw] min-[500px]:text-[12vw] sm:text-[14vw] 2xl:text-[16vw]"
			>
				DOR
			</div>

			<div
				id="banner-4x"
				className="fixed left-3/4 top-0 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
			/>
		</div>
	);
};

export default WelcomeTemplate;
