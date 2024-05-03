import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ElementRef, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const useHomeTL = () => {
    const targerHero = useRef<ElementRef<"article">>(null)
    const char = "#char"
    const img = "#img"
    const word = "#word"
    const y = "-100%"

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)
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
                        y,
                        stagger: {
                            from: "center",
                            amount: 0.35,
                        },
                    })
                },
            })
            tl.to(img, {
                scrollTrigger: {
                    trigger: targerHero.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: "25%",
                ease: "none",
            })
            gsap.to(word, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 2.6,
                ease: "power2",
                stagger: 0.025,
            })
        },
        { scope: targerHero },
    )

    return { targerHero }
}
