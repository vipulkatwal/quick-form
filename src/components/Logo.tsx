"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Logo = () => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevent hydration mismatch by using a consistent initial render
	const logoSrc = mounted
		? resolvedTheme === "dark"
			? logoDark
			: logoLight
		: logoLight;

	return (
		<Link href="/" className="flex items-center">
			<Image
				src={logoSrc}
				alt="Logo"
				width={140}
				height={150}
				className="hover:cursor-pointer"
				priority // Add priority to preload the image
				style={{
					color: "transparent", // Keep only essential styles
				}}
			/>
		</Link>
	);
};

export default Logo;
