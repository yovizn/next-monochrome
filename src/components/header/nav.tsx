"use client"

import { cn } from "@/utils/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

type NavListProps = {
    label: string
    href: string
    className?: string
}

export default function NavList({ label, href, className }: NavListProps) {
    return (
        <Link
            href={href}
            className={cn(
                "relative overflow-hidden transition-all duration-500 ease-in-out", className
            )}
        >
            {label}
        </Link>
    )
}
