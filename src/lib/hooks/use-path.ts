"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

export function usePath() {
    const path = usePathname()
    const [isPath, setIsPath] = useState(path)

    return {
        path,
        isPath,
        setIsPath,
    }
}
