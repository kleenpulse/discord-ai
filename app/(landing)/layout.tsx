"use client";

import { LenisProvider } from "@/components/lenis-provider";
import GotoTop from "@/components/miscellaneous/goto-top";
import SmoothCursor from "@/components/miscellaneous/SmoothCursor";
import HomeNavbar from "@/components/navigations/nav-bar";

import { Suspense } from "react";

export default function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<LenisProvider>
			<SmoothCursor />
			<HomeNavbar />
			<Suspense>{children}</Suspense>
			<GotoTop />
		</LenisProvider>
	);
}
