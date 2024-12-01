import React from 'react'
import {UserButton} from "@clerk/nextjs";
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Logo from '../../components/Logo';

function Layout(children): {children: React.ReactNode} {
  return  <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
    <nav className="flex justify-between border-b border-border h-6 px-4 py-2">
      <Logo/>
      <ThemeSwitcher/>
      <UserButton afterSignOutUrl="/sign-in"/>
    </nav>
    <main className="flex w-full flex-grow"></main>

    {children}</div>

}

export default Layout