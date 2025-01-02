"use client";

import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen">
			<header className="border-b">
				<div className="flex h-16 items-center px-4 container mx-auto">
					<Logo />

					<div className="ml-auto flex items-center space-x-4">
						<ThemeSwitcher />
						<UserButton afterSignOutUrl="/sign-in" />
					</div>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
