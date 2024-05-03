import { cn } from "@/utils/cn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RefObject, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Brand({
    targerHero,
    className,
}: {
    className?: string
    targerHero: RefObject<HTMLElement>
}) {
    const heading = "Monochrome®"
    const splitHeading = heading.split("")

    useGSAP(() => {
        const char = "#char"
        const tl = gsap.timeline({
            defaults: {
                scrollTrigger: {
                    trigger: targerHero.current,
                    start: "top top+=10px",
                    end: "bottom bottom",
                    scrub: true,
                },
                ease: "power4.inOut",
            },
        })
        gsap.to(char, {
            top: 0,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.5,
            stagger: {
                from: "center",
                amount: 0.55,
            },
            onComplete: () => {
                tl.to(char, {
                    y: "-100%",
                    stagger: {
                        from: "center",
                        amount: 0.35,
                    },
                })
            },
        })
    }, {})

    return (
        <div
            className={cn(
                "sticky top-20 flex flex-col items-center justify-center mix-blend-difference tablet:top-0",
                className,
            )}
        >
            <div className='h-[400px] w-full'>
                <h1
                    role='heading'
                    className='resText flex size-full justify-center pb-32 pt-40 font-extrabold'
                >
                    <span className='sr-only'>{heading}</span>
                    <span aria-hidden={true} className='flex self-start overflow-hidden'>
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
        </div>
    )
}
