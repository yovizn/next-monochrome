import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion"
import { useRef } from "react"

export default function Paragraphs({ paragraph }: { paragraph: string }) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start center", "start start"],
    })

    const word = paragraph.split(" ")

    return (
        <p
            ref={container}
            className='mx-auto flex max-w-screen-desktop flex-wrap p-10 text-3xl tablet:text-6xl leading-none text-foreground-100 gap-x-4 gap-y-2.5'
        >
            {word.map((w, i) => {
                const start = i / word.length
                const end = start + 1 / word.length

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {w}
                    </Word>
                )
            })}
        </p>
    )
}

function Word({
    progress,
    range,
    children,
}: {
    children: string
    progress: MotionValue<number>
    range: number[]
}) {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <span className='relative flex flex-nowrap'>
            {children.split("").map((char, i) => {
                const start = range[0] + i * step
                const end = range[0] + (i + 1) * step
                return (
                    <Char key={`c_${i}`} progress={progress} range={[start, end]}>
                        {char}
                    </Char>
                )
            })}
        </span>
    )
}

function Char({
    children,
    progress,
    range,
}: {
    children: string
    progress: MotionValue<number>
    range: number[]
}) {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='font-bold uppercase block'>
            <span className='absolute text-foreground opacity-10'>{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}
