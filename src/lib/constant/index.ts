type TLink = {
    name?: string
    url: string
}

type TOverviewList = {
    label: string
    content: string
}

export const navLinks: TLink[] = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "about us",
        url: "/about",
    },
    {
        name: "services",
        url: "/services",
    },
    {
        name: "teams",
        url: "/teams",
    },
]

export const overviewList: TOverviewList[] = [
    {
        label: "Frontend Dev",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestias illo dolorum! Soluta quibusdam in maiores repudiandae magnam beatae debitis?",
    },
    {
        label: "UI/UX Design",
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, dolorum!",
    },
    {
        label: "Web Design",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis explicabo velit quidem temporibus blanditiis provident, repellendus ab quia in, perspiciatis reiciendis sequi dolorem cupiditate pariatur veritatis officiis optio magnam.",
    },
    {
        label: "Interactive Media Developer",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi placeat neque amet consequuntur illum possimus.",
    },
    {
        label: "Interactive Media Developer",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi placeat neque amet consequuntur illum possimus.",
    },
    {
        label: "Interactive Media Developer",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi placeat neque amet consequuntur illum possimus.",
    },
]
