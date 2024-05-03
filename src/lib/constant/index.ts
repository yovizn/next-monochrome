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
    // {
    //     name: "services",
    //     url: "/services",
    // },
    {
        name: "teams",
        url: "/teams",
    },
]

export const overviewList: TOverviewList[] = [
    {
        label: "Frontend Dev",
        content:
            "A frontend developer is responsible for building the user interface of a website or application using HTML, CSS, and JavaScript. They focus on creating visually appealing and interactive elements that users interact with directly.",
    },
    {
        label: "UI/UX Design",
        content:
            "UI/UX design involves creating intuitive and visually pleasing interfaces for websites or applications. UI (User Interface) design focuses on the look and feel, while UX (User Experience) design ensures a smooth and enjoyable interaction for users. It involves understanding user behavior, wireframing, prototyping, and iterating designs based on user feedback to create a seamless experience.",
    },
    {
        label: "Web Design",
        content:
            "Apologies for the verbosity. Put succinctly, web design involves crafting the visual appearance and layout of websites to be both aesthetically pleasing and user-friendly.",
    },
    {
        label: "Interactive Media Developer",
        content:
            "Interactive media developers craft engaging digital experiences using technologies like HTML5, CSS3, JavaScript, and frameworks such as React or Vue.js. They create dynamic content, including web applications, games, and multimedia presentations, designed to interactively engage users across various platforms and devices.",
    },
    {
        label: "3D Design",
        content:
            "3D design: Creating digital models and visualizations using specialized software for industries like animation, gaming, architecture, and product design.",
    },
    {
        label: "Creative Developer",
        content:
            "Creative developers merge technical expertise with creative software to craft innovative digital solutions like websites, applications, animations, and multimedia content.",
    },
]
