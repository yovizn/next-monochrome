"use client"

import { useRef } from "react"
import Brand from "../common/brand"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Paragraphs from "../common/paragraph"

export default function AboutSection() {
    const container = useRef(null)
    const h2Ref = useRef(null)
    const paragraph =
        "Crafting captivating, interactive websites, we redefine digital engagement with innovation and flair.".split(
            " ",
        )
    const { scrollYProgress } = useScroll({
        target: h2Ref,
        offset: ["start start", "end start"],
    })

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.8],
        ["#ffffff", "#000000"],
    )

    return (
        <article className='size-full'>
            <div ref={container} className='flex size-full flex-col'>
                <div className='flex min-h-[200vh] w-full flex-col'>
                    <Brand targerHero={container} />

                    <motion.div
                        style={{
                            backgroundColor,
                        }}
                        ref={h2Ref}
                        className='flex h-[100vh] w-full items-center justify-center bg-foreground-100'
                    >
                        <div className='flex h-screen w-full items-center justify-center'>
                            <div className='mx-auto flex max-w-screen-desktop items-center justify-center overflow-hidden px-4'>
                                <motion.h2 className='flex max-w-lg flex-wrap items-center justify-center gap-x-3 text-balance text-center text-2xl font-thin uppercase leading-normal text-background-100 tablet:text-4xl'>
                                    {paragraph.map((word, idx) => (
                                        <span
                                            key={word + idx}
                                            className='block overflow-hidden'
                                        >
                                            <motion.span
                                                className='block'
                                                initial={{
                                                    opacity: 0,
                                                    y: "100%",
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: "0%",
                                                    transition: {
                                                        duration: 0.3,
                                                        delay: idx * 0.025,
                                                        type: "tween",
                                                    },
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        </span>
                                    ))}
                                </motion.h2>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='min-h-screen w-full'>
                <Paragraphs paragraph='With a passion for innovation, we are a leading web development company dedicated to creating immersive and captivating online experiences. Our team specializes in crafting interactive websites that not only attract attention but also engage users on a profound level.' />
            </div>
        </article>
    )
}
