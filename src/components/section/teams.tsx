"use client"

import { TUser } from "@/app/(root)/teams/page"
import Image from "next/image"
import Link from "next/link"
import Brand from "../common/brand"
import { useRef } from "react"
import { usePathname } from "next/navigation"

export default function Team({ data }: { data: TUser[] }) {
    const ref = useRef(null)
    const path = usePathname()

    return (
        <article className='flex min-h-screen flex-col items-center justify-center'>
            {/* <div ref={ref} className="h-[150vh]"> */}
            {/* </div> */}
            <Brand
                targerHero={ref}
                className={path == "/teams" ? "max-tablet:hidden" : ""}
            />
            <div className='flex min-h-screen max-w-screen-desktop flex-col items-center justify-center gap-10 tablet:p-0'>
                <div className='mt-40 mobile:mt-20'>
                    <h3 className='text-5xl font-medium uppercase tablet:text-7xl'>
                        Our Teams and Developer
                    </h3>
                </div>
                <div className='flex size-full flex-nowrap justify-center gap-4 px-4 tablet:flex-wrap tablet:items-center tablet:pb-20 max-tablet:flex-col'>
                    {data.map((data) => (
                        <div
                            key={data.id.value}
                            className='border-border border-2 bg-background-100 p-4'
                        >
                            <figure role='figure' className='flex flex-col gap-4'>
                                <figcaption className='flex items-center justify-between'>
                                    <span className='block'>{data.nat}</span>
                                    <span className='block uppercase'>
                                        {data.location.city.length <= 15
                                            ? data.location.city
                                            : ""}
                                    </span>
                                </figcaption>
                                <div className='flex gap-4 tablet:flex-col tablet:gap-0'>
                                    <Image
                                        src={data.picture.large}
                                        alt={data.name.first}
                                        width={200}
                                        height={200}
                                        quality={100}
                                        sizes='200px'
                                        className='grayscale'
                                    />
                                    <figcaption className='flex flex-col justify-center pt-4 max-tablet:self-end'>
                                        <span className='flex gap-2 text-lg font-bold'>
                                            <span className='block'>
                                                {data.name.first}
                                            </span>
                                            <span className='block'>
                                                {data.name.last}
                                            </span>
                                        </span>
                                        <Link
                                            href={"mailto:" + data.email}
                                            className='block transition-colors duration-300 hover:text-blue'
                                        >
                                            {data.email}
                                        </Link>
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
