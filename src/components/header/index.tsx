import { navLinks } from "@/lib/constant"
import NavList from "./nav"
import MobileNav from "./mobileNav"
import Link from "next/link"

export default function Header() {
    return (
        <header className='fixed left-0 top-0 z-50 h-20 w-full bg-background uppercase'>
            <div className='mx-auto size-full max-w-screen-desktop px-4 desktop:px-0'>
                <div className='flex size-full flex-1 items-center justify-between'>
                    <Link
                        href='/'
                        className='group relative z-50 text-xl uppercase text-foreground-100'
                    >
                        <span className='block overflow-hidden'>
                            Mono
                            <span className='relative overflow-hidden'>
                                chrome&#174;
                                <span className='absolute -left-full bottom-0 h-px w-full bg-foreground-100 transition-all duration-500 ease-in-out group-hover:left-0 max-mobile:hidden' />
                            </span>
                        </span>
                    </Link>

                    <nav
                        role='navigation'
                        className='hidden gap-x-10 text-xl font-light uppercase tablet:flex'
                    >
                        {navLinks.map(({ url, name }) => (
                            <NavList key={name} href={url} label={name ? name : ""} className="text-foreground-100" />
                        ))}
                    </nav>

                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
