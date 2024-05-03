"use client"

import { ElementRef, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { overviewList } from "@/lib/constant"
import { useViewportDevice } from "@/lib/hooks/use-viewport"

gsap.registerPlugin(ScrollTrigger)

export default function Overview() {
    const target = useRef<ElementRef<"article">>(null)
    const { isDesktop } = useViewportDevice()

    useGSAP(
        () => {
            const mm = gsap.matchMedia()
            const tl = gsap.timeline()
            const card = "#card-item"
            const gh = "#parh"

            mm.add("(max-width: 699px)", () => {
                tl.to(gh, {
                    scrollTrigger: {
                        trigger: "#wrp",
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    },
                    y: "0%",
                })
                tl.to(card, {
                    scrollTrigger: {
                        trigger: target.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    x: "-50%",
                    y: "0%",
                    opacity: 1,
                    stagger: 0.5,
                })
            })
            mm.add("(min-width: 700px)", () => {
                tl.to(gh, {
                    scrollTrigger: {
                        trigger: "#wrp",
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    },
                    y: "0%",
                })
                tl.to(card, {
                    scrollTrigger: {
                        trigger: target.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    x: "0%",
                    y: "0%",
                    opacity: 1,
                    stagger: 0.5,
                })
            })
        },
        { scope: target },
    )

    return (
        <article ref={target} className='relative flex h-[500vh] w-full flex-col'>
            <div
                id='wrp'
                className='mx-auto flex h-[50vh] w-full max-w-screen-desktop items-center justify-center overflow-hidden px-4 py-40 tablet:h-screen'
            >
                <div
                    id='parh'
                    className='flex -translate-y-[200%] flex-col items-center justify-center gap-y-10 tablet:text-center max-tablet:px-10 max-tablet:pt-20'
                >
                    <h3 className='text-balance text-2xl uppercase tablet:text-5xl'>
                        Step into a world where imagination knows no bounds &ndash;
                        welcome to Creative Website Maker.
                    </h3>
                    <p className='text-balance tablet:text-lg'>
                        An artist seeking to showcase your portfolio, our team is here to
                        craft bespoke websites tailored to your exact needs. Let your
                        creativity soar as we embark on this exhilarating journey
                        together, sculpting digital landscapes that captivate, inspire,
                        and leave a lasting impression.
                    </p>
                </div>
            </div>
            <div className='sticky left-0 top-20 mx-auto flex h-screen w-full max-w-screen-desktop flex-col pt-4 tablet:pt-10'>
                <div className='relative flex size-full flex-col overflow-hidden'>
                    <h3 className='hidden max-w-[380px] self-end text-right text-7xl tablet:flex'>
                        Lorem ipsum dolor sit amet.
                    </h3>
                    {overviewList.map((item, idx) => {
                        return (
                            <div
                                id='card-item'
                                key={item.label + "0" + idx}
                                className='absolute h-[360px] w-full max-w-[400px] translate-x-[100vw] border-2 border-foreground/50 bg-background-100/50 p-4 opacity-0 backdrop-blur-md'
                                style={{
                                    left: isDesktop ? 6 * idx + 5 + "%" : "50%",
                                    top: isDesktop ? 5 * idx + 5 + "%" : idx * 8 + "%",
                                }}
                            >
                                <div className='flex size-full flex-col justify-between'>
                                    <span className='flex gap-x-4 text-xl font-medium text-foreground-100'>
                                        <span className='block'>[0{idx + 1}]</span>
                                        <span className='block'>{item.label}</span>
                                    </span>
                                    <p className='font-light capitalize text-foreground-100'>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}
