import React from "react";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen bg-background max-h-screen">
			<nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="flex items-center gap-6">
					<Logo />
					<div className="hidden md:flex gap-4">
						{/* Add any additional nav items here */}
					</div>
				</div>

				<div className="flex items-center gap-4">
					<ThemeSwitcher />
					<div className="h-8 w-[1px] bg-border/50" />
					<UserButton
						afterSignOutUrl="/sign-in"
						appearance={{
							elements: {
								avatarBox:
									"h-[32px] w-[32px] rounded-full ring-2 ring-primary/10 hover:ring-primary/50 transition-all",
							},
						}}
					/>
				</div>
			</nav>

			<main className="flex w-full flex-grow">{children}</main>
		</div>
	);
}
