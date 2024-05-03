"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect } from "react"
import { useLenis } from "lenis/react"

export function ScrollTriggerConfig() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.clearScrollMemory("manual")
        ScrollTrigger.defaults({
            scrub: true,
        })
    }, [])

    const lenis = useLenis(ScrollTrigger.update)
    useEffect(() => ScrollTrigger.refresh(), [lenis])

    return null
}
