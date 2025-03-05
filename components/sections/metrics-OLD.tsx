"use client";

import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/constants";
import useInView from "@/hooks/util-hooks/useInView";

export const MetricsOLD = () => {
	const metricsCards = useRef<HTMLDivElement>(null);
	const metrics = useRef<HTMLDivElement>(null);

	const metricsInView = useInView({
		ref: metrics,
		once: true,
	});
	const metricsCardInView = useInView({
		ref: metricsCards,
		once: true,
	});

	return (
		<div className="w-full flex flex-col gap-y-10 px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 py-10 md:pb-20 xl:pb-44 md:pt-20 items-center relative z-20   pb-20">
			<div
				ref={metrics}
				style={{
					transform: metricsInView ? "none" : "translateY(100px)",
					opacity: metricsInView ? 1 : 0,
					transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
				id="features"
				className="flex flex-col gap-y-3 w-full justify-center items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 overflow-y-clip  text-white max-w-[600px]"
			>
				<b className="font-helvetica-bold text-lg">Features</b>
				<h2 className="font-helvetica-bold text-2xl md:text-4xl lg:text-5xl text-center">
					Scanning Metrics
				</h2>
				<p className="text-center max-w-[800px] lg:text-xl font-light">
					Discover sentiment with metrics like
				</p>
			</div>
			<div className="w-full flex  justify-center  overflow-y-clip">
				<div
					ref={metricsCards}
					style={{
						transform: metricsInView ? "none" : "translateY(100px)",
						opacity: metricsInView ? 1 : 0,
						transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white bg-white/20 p-8 rounded-xl"
				>
					{METRICS.map((metric) => (
						<div
							key={metric.id}
							className="flex flex-col gap-y-4 max-w-[250px] lg:max-w-[250px] items-center"
						>
							<CircularProgress
								percentage={metric.percentage}
								color={metric.color}
							/>

							<p className="text-sm lg:text-lg text-center text-gray-200 font-light">
								{metric.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const CircularProgress = ({
	percentage,
	color,
}: {
	percentage: number;
	color: string;
}) => {
	const [progress, setProgress] = useState(0);
	const metrics = useRef<HTMLDivElement>(null);

	const metricsInView = useInView({
		ref: metrics,
		once: true,
	});

	useEffect(() => {
		if (!metricsInView) return;

		const end = percentage;
		const duration = 3000;
		let startTimestamp: number | null = null;

		const easeOutQuad = (t: number) => t * (2 - t);

		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const elapsed = timestamp - startTimestamp;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutQuad(progress);
			setProgress(Math.floor(easedProgress * end));

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);

		return () => {
			// Cleanup if needed
		};
	}, [percentage, metricsInView]);

	return (
		<div ref={metrics} className="relative size-44">
			<svg className="w-full h-full" viewBox="0 0 100 100">
				{/* Background circle */}
				<circle
					className="text-white/10"
					strokeWidth="12"
					stroke="currentColor"
					fill="transparent"
					r="44"
					cx="50"
					cy="50"
				/>
				{/* Progress circle */}
				<circle
					className="text-blue-500 transition-all duration-1000 ease-out"
					strokeWidth="12"
					strokeDasharray={44 * 2 * Math.PI}
					strokeDashoffset={44 * 2 * Math.PI * ((100 - progress) / 100)}
					strokeLinecap="round"
					stroke={color}
					fill="transparent"
					r="44"
					cx="50"
					cy="50"
					style={{
						transformOrigin: "50% 50%",
						transform: "rotate(-90deg)",
						transition: "stroke-dashoffset 2s ease-out", // Updated to 2s to match the new duration
					}}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
				{progress}%
			</div>
		</div>
	);
};
