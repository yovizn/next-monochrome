import { navLinks } from "@/lib/constant"
import NavList from "./nav"
import MobileNav from "./mobileNav"
import LogoNav from "./logo"

export default function Header() {
    return (
        <header className='fixed left-0 top-0 z-50 h-20 w-full bg-background uppercase'>
            <div className='mx-auto size-full max-w-screen-desktop px-4 desktop:px-0'>
                <div className='flex size-full flex-1 items-center justify-between'>
                    <LogoNav />

                    <nav
                        role='navigation'
                        className='hidden gap-x-10 text-xl font-light uppercase tablet:flex'
                    >
                        {navLinks.map(({ url, name }) => (
                            <NavList
                                key={name}
                                href={url}
                                label={name ? name : ""}
                                className='text-foreground-100'
                            />
                        ))}
                    </nav>

                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
