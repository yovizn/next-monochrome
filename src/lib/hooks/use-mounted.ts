"use client"

import { useEffect, useState } from "react"

export function useMountedDevice() {
    const [isMounted, setisMounted] = useState(false)
    useEffect(() => {
        setisMounted(true)
    }, [])

    return { isMounted }
}
