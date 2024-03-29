'use-client'

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav(){
    const {user, isLoaded} = useUser();
    return(
        <header>
        <nav className="flex items-center justify-between p-6 lg:px-8 h-20 hover:text-green-600 border border-t-0 border-l-0 border-r-0 border-b-gray-600 bg-black text-white" aria-label="Global">
            <div>
                <a href="/" className="-m-1.5 p-1.5">Nextjs Autenticação</a>
            </div>
            {
                isLoaded && user && (
                    <>
                    <Link href="/dashboard" className="hover:text-green-600">Dashboard </Link>]
                    <UserButton afterSignOutUrl="/"/>

                    </>
                ) 
            }
            
        </nav>
        </header>
    )
}