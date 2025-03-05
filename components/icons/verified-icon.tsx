import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const VerifiedIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="423"
				height="577"
				viewBox="0 0 423 577"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<g filter="url(#filter0_dd_10735_3950)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M349.237 325.523C345.588 331.209 333.575 329.497 328.555 333.49C323.534 337.483 322.511 349.934 316.593 352.133C310.675 354.331 301.625 346.086 295.048 346.438C288.471 346.791 280.818 356.004 274.221 354.312C267.625 352.62 265.798 340.779 259.994 337.054C254.189 333.33 242.677 336.105 238.376 331.313C234.076 326.521 239.275 315.225 236.855 309.099C234.434 302.974 223.174 298.492 222.699 291.888C222.225 285.283 232.866 279.714 234.661 273.245C236.456 266.775 229.491 256.718 233.14 251.031C236.788 245.345 248.801 247.057 253.822 243.064C258.842 239.071 259.866 226.619 265.783 224.421C271.701 222.223 280.824 230.515 287.473 230.209C294.123 229.903 301.631 220.596 308.366 222.072C315.101 223.548 316.651 235.822 322.455 239.546C328.26 243.271 339.772 240.496 344.073 245.287C348.373 250.079 343.101 261.329 345.522 267.454C347.942 273.58 359.203 278.062 359.677 284.666C360.151 291.27 349.51 296.84 347.715 303.309C345.92 309.778 352.885 319.836 349.237 325.523Z"
						fill="#3BA55C"
					/>
					<path
						d="M271.019 312.552L258.332 278.445L271.829 273.256L279.154 293.536L327.541 275.806L332.708 289.305L271.019 312.552Z"
						fill="white"
					/>
				</g>
				<defs>
					<filter
						id="filter0_dd_10735_3950"
						x="-23.8356"
						y="-25.8356"
						width="630.218"
						height="627.96"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="33.1717"
							operator="dilate"
							in="SourceAlpha"
							result="effect1_dropShadow_10735_3950"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="94.332" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_10735_3950"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="33.1717"
							operator="dilate"
							in="SourceAlpha"
							result="effect2_dropShadow_10735_3950"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="94.332" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_10735_3950"
							result="effect2_dropShadow_10735_3950"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_10735_3950"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		);
	}
);

VerifiedIcon.displayName = "VerifiedIcon";
export default VerifiedIcon;
