import { useEffect, useRef, useState } from "react"
import { Variants, motion } from "framer-motion"
import { navLinks } from "@/lib/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft } from "@geist-ui/icons"
import { cn } from "@/utils/cn"

type MenuNavProp = {
    menuIsActive: boolean
    setMenuIsActive: (menuIsActive: boolean) => void
}

const menuAnim: Variants = {
    initial: {
        opacity: 0,
        y: "-100%",
    },
    animate: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
        },
    },
}

const listAnim: Variants = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
            // opacity: { duration: 0.35 },
        },
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
}

export default function MenuNav({ menuIsActive, setMenuIsActive }: MenuNavProp) {
    const menuNavRef = useRef(null)
    const path = usePathname()
    const [isPath, setIsPath] = useState(path)

    return (
        <motion.nav
            ref={menuNavRef}
            variants={menuAnim}
            initial='initial'
            animate='animate'
            exit='exit'
            className='fixed inset-0 h-screen w-full -translate-y-full bg-background py-10 opacity-0'
        >
            <ul className='flex size-full flex-col justify-center'>
                {navLinks.map((link, idx) => (
                    <motion.li
                        layout
                        key={link.name + "-" + idx}
                        onMouseEnter={() => setIsPath(link.url)}
                        onMouseLeave={() => setIsPath(path)}
                        onClick={() => setMenuIsActive(!menuIsActive)}
                        className='border-foreground-100 text-4xl uppercase [perspective-origin:_bottom] [perspective:_120px]'
                    >
                        <Link
                            href={link.url}
                            className='relative flex size-full items-center justify-between'
                        >
                            <motion.span
                                variants={listAnim}
                                custom={idx}
                                initial='initial'
                                animate='enter'
                                exit='exit'
                                className='block size-full px-4 py-3 text-foreground-100'
                            >
                                {link.name}
                                {isPath === link.url && (
                                    // <MotionIcon layout className='size-10' />
                                    <motion.div
                                        layoutId='indicator'
                                        transition={{ type: "tween", duration: 0.2 }}
                                        className='absolute inset-0 size-full bg-foreground-100 mix-blend-difference'
                                    />
                                )}
                            </motion.span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    )
}
