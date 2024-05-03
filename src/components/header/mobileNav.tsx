"use client"

import { useRef, useState } from "react"
import MenuNav from "./menuNav"
import { AnimatePresence } from "framer-motion"
import { useViewportDevice } from "@/lib/hooks/use-viewport"

export default function MobileNav() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const menuRef = useRef(null)
    const { isDesktop } = useViewportDevice()

    const handleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }

    if (!isDesktop)
        return (
            <>
                <button
                    ref={menuRef}
                    onClick={handleMenu}
                    className='flex items-center justify-center'
                >
                    <span className='relative z-[100] h-[24.5px] w-[54.5px] overflow-hidden text-xl uppercase text-foreground-100'>
                        <span id='menu' className='absolute inset-0 block translate-y-0'>
                            Menu
                        </span>
                        <span
                            id='close'
                            className='absolute inset-0 block translate-y-full'
                        >
                            Close
                        </span>
                    </span>
                </button>

                <AnimatePresence mode='wait'>
                    {isMenuActive && <MenuNav menuIsActive={isMenuActive} setMenuIsActive={setIsMenuActive} />}
                </AnimatePresence>
            </>
        )
    return null
}
