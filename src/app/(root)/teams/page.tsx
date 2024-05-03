import LenisWrapper from "@/components/common/lenisWrapper"
import Team from "@/components/section/teams"
import axios from "axios"

export type TUser = {
    id: {
        value: string
    }
    nat: string
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    location: {
        country: string
        city: string
    }
    email: string
    picture: {
        large: any
    }
}

export default async function Teams() {
    const data = (await getUser()) as TUser[]

    return (
        <LenisWrapper>
            <section className='min-h-screen w-full'>
                <Team data={data} />
            </section>
        </LenisWrapper>
    )
}

async function getUser() {
    try {
        const res = await axios.get(
            "https://randomuser.me/api/?results=5&inc=gender,name,location,email,id,nat,picture",
        )
        return res.data.results
    } catch (err) {
        console.error(err)
    }
}
