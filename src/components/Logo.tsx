"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Logo = () => {
	const { theme } = useTheme();

	return (
		<Link href="/" className="flex items-center">
			<Image
				src={theme === "dark" ? logoDark : logoLight}
				alt="Logo"
				width={140}
				height={150}
				className="hover:cursor-pointer"
			/>
		</Link>
	);
};

export default Logo;
