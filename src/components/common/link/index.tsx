"use client"

import { usePath } from "@/lib/hooks/use-path"
import { useLenis } from "lenis/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

interface TLink  {
    fallback?: keyof JSX.IntrinsicElements
    children?: React.ReactNode
    href: string
    className?: string
}

export default function Link({
    href,
    children,
    className,
}: TLink) {
    const lenis = useLenis()
    const pathname = usePathname()
    const isAnchor = href.startsWith("#") || href.includes(pathname)

    if (isAnchor)
        return (
            <button
                onClick={(e) => {
                    if (isAnchor) {
                        e.preventDefault()
                        lenis?.scrollTo(href.includes('#') ? href : 0, { duration: 1.5, lerp: 0.08 })
                    }
                }}
                className={className}
            >
                {children}
            </button>
        )

    return <NextLink href={href}>{children}</NextLink>
}
