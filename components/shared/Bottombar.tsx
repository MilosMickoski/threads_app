"use client"

import { sidebarLinks } from "@/constants";
import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import {usePathname, useRouter} from 'next/navigation'

function BottomBar(){

    const router = useRouter();
    const pathname = usePathname();

    return(
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link)=>{
                        
                        const isActive = (pathname.includes(link.route) && link.route.length>1)|| pathname === link.route;

                        return(
                        <Link href={link.route} key={link.label} className={`bottombar_link ${isActive&& 'bg-primary-500'}`}>
                            
                            <Image src={link.imgURL} alt={link.label} height={24} width={24}/>
                            <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]} </p>
                            
                        </Link>
                    )}
                    )}
                </div>
                <div className="mt-10 px-6 max-md:hidden max-sm:hidden">
                        <SignedIn>
                            <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                                <div className="flex cursor-pointer gap-4 p-4">
                                    <Image 
                                    src="/assets/logout.svg" 
                                    alt="Logout" 
                                    width={24} 
                                    height={24}/>
                                    <p className="text-light-2 max-lg:hidden">Logout</p>
                                </div>
                            </SignOutButton>
                        </SignedIn>

            </div>
        </section>
    )   
}

export default BottomBar;