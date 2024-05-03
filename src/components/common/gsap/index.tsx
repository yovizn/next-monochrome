"use client"

import Tempus from "@darkroom.engineering/tempus"
import gsap from "gsap"
import { useLayoutEffect } from "react"
import { ScrollTriggerConfig } from "./scroll-trigger"

export function GSAP({ ScrollTrigger = false }: { ScrollTrigger?: Boolean }) {
    useLayoutEffect(() => {
        gsap.defaults({ ease: "none" })
        gsap.ticker.lagSmoothing(0)
        gsap.ticker.remove(gsap.updateRoot)
        Tempus?.add((time: number) => {
            gsap.updateRoot(time / 1000)
        }, 0)
    }, [])
    return ScrollTrigger && <ScrollTriggerConfig />
}
