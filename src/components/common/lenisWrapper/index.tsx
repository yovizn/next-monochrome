"use client"

import { Lenis } from "lenis/react"
import cn from "clsx"

import styles from "./lenis.module.css"
import { LenisOptions } from "lenis"
import Header from "@/components/header"
import Footer from "@/components/footer"

type LenisWrapperProps = {
    lenis?: boolean
    lenisOptions?: LenisOptions
} & React.HTMLProps<HTMLDivElement>

export default function LenisWrapper({
    children,
    lenis = true,
    lenisOptions = {
        lerp: 0.085,
        duration: 4,
        syncTouch: true,
        syncTouchLerp: 0.9,
        smoothWheel: true,
    },
    className,
    ...props
}: LenisWrapperProps) {
    return (
        <>
            {lenis && <Lenis root options={lenisOptions} />}
            <main role='main' className={cn(styles.lenis, className)} {...props}>
                {children}
            </main>
        </>
    )
}
