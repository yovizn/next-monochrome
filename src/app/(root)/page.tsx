import LenisWrapper from "@/components/common/lenisWrapper"

import Overview from "@/components/section/overview"
import Hero from "@/components/section/hero"

import styles from "./home.module.css"

export default function Home() {
    return (
        <LenisWrapper className={styles.home}>
            <section id='hero-section' className={styles.hero}>
                <Hero />
            </section>

            <section id='overview-section' className={styles.overview}>
                <Overview />
            </section>
        </LenisWrapper>
    )
}
