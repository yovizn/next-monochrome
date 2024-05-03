"use client"

import { useRef } from "react"
import styles from "./footer.module.css"
import { useScroll, useTransform, motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
    const footerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"],
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"])
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    const footer = "Monochrome®"

    return (
        <footer className={styles.footer}>
            <motion.div
                ref={footerRef}
                style={{
                    y,
                }}
                className='mx-auto'
            >
                <div className='flex size-full items-center justify-center bg-background-100 px-4 py-6'>
                    <div className='flex size-full w-full max-w-screen-desktop items-center justify-between'>
                        <Link
                            href='https://alphatango.com/'
                            target='_blank'
                            className='group'
                        >
                            <p className='capitalize'>
                                Design system inspire by{" "}
                                <span className=' font-bold uppercase text-foreground-100 transition-colors duration-300 ease-in-out group-hover:text-blue'>
                                    Alphatango
                                </span>
                            </p>
                        </Link>
                        <p className='font-light capitalize'>
                            copyright 2024 &copy;{" "}
                            <span className='font-medium'>{footer}</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}
