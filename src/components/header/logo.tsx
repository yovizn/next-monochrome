"use client"

import { useLenis } from "lenis/react"

export default function LogoNav() {
    const lenis = useLenis()

    return (
        <button
            onClick={() => lenis?.scrollTo(0)}
            className='group relative z-50 text-xl uppercase text-foreground-100'
        >
            <span className='block overflow-hidden'>
                Mono
                <span className='relative overflow-hidden'>
                    chrome&#174;
                    <span className='absolute -left-full bottom-0 h-px w-full bg-foreground-100 transition-all duration-500 ease-in-out group-hover:left-0 max-mobile:hidden' />
                </span>
            </span>
        </button>
    )
}
