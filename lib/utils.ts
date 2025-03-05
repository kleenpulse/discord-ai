import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function shrinkString({
	address,
	prefixLength = 5,
	afterLength = 4,
	useDot = false,
}: {
	address: string;
	prefixLength?: number;
	afterLength?: number;
	useDot?: boolean;
}): string {
	if (address.length <= 4) {
		return address; // Not enough characters to shrink
	}

	const prefix = address.slice(0, prefixLength);
	const suffix = address.slice(-afterLength);

	return useDot ? `${prefix}...${suffix}` : `${prefix}**${suffix}`;
}
