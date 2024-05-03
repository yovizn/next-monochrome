"use client"

import { useMountedDevice } from "@/lib/hooks/use-mounted"
import { useLenis } from "lenis/react"
import { useLayoutEffect } from "react"

type TemplateProps = {
    children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
    const lenis = useLenis()

    useLayoutEffect(() => {
        const load = () => {
            lenis?.scrollTo(0, { duration: 1.5, lerp: 0.09 })
        }
        const timout = setTimeout(load, 3500)

        return () => clearTimeout(timout)
    }, [])

    return children
}
