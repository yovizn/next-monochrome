import { useMediaQuery } from "@darkroom.engineering/hamo"

export function useViewportDevice() {
    const isDesktop = useMediaQuery("(min-width: 700px)")
    const isTablet = useMediaQuery("(max-width: 699px)")
    return { isDesktop, isTablet }
}
