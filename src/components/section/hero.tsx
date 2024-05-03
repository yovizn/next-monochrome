"use client"

import Image from "next/image"
import { useHomeTL } from "@/hooks/animation/use-home-timeline"

import heroImage from "@public/images/Hero-1.jpg"
import Brand from "../common/brand"

export default function Hero() {
    const heading = "Monochrome®"
    const description = "Nothing is more certain, we are a certainty like"
    const splitHeading = heading.split("")
    const splitDesc = description.split(" ")

    const { targerHero } = useHomeTL()

    return (
        <article ref={targerHero} className='relative h-[160vh] w-full'>
            <div className='absolute left-0 top-0 size-full overflow-hidden'>
                <Image
                    id='img'
                    src={heroImage}
                    alt='Hero image'
                    fill
                    priority
                    placeholder='blur'
                    sizes='100vw'
                    className='object-cover object-[20%]'
                />
            </div>
            {/* <div className='sticky top-20 flex flex-col items-center justify-center mix-blend-difference tablet:top-0'>
                <div className='h-[400px] w-full'>
                    <h1
                        role='heading'
                        className='resText flex size-full justify-center pb-32 pt-40 font-extrabold'
                    >
                        <span className='sr-only'>{heading}</span>
                        <span
                            aria-hidden={true}
                            className='flex self-start overflow-hidden'
                        >
                            {splitHeading.map((char, idx) => {
                                return (
                                    <span
                                        key={`${heading}_${idx}`}
                                        id='char'
                                        className='relative top-[14rem] block uppercase'
                                    >
                                        {char}
                                    </span>
                                )
                            })}
                        </span>
                    </h1>
                </div>
            </div> */}
            <Brand targerHero={targerHero} />

            <p className='mx-auto mt-40 flex max-w-[320px] flex-wrap justify-center gap-x-1.5 overflow-hidden text-lg font-bold uppercase text-foreground-100 mix-blend-difference tablet:mt-4 tablet:text-2xl'>
                <span className='sr-only'></span>
                {splitDesc.map((word, idx) => (
                    <span
                        aria-hidden={true}
                        id='word'
                        key={idx}
                        className='inline-block flex-shrink-0 translate-y-full opacity-0'
                    >
                        {word}
                    </span>
                ))}
            </p>
        </article>
    )
}
