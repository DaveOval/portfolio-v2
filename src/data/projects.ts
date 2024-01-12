interface Proyects {
    id: number,
    name : string,
    img: string,
    description: string,
    type: string,
    tecnologysFront: string[],
    tecnologysBack: string[],
    linkGithub: string,
    linkDeploy: string,
}


export const projectsFront: Proyects[] = [
    {
        id: 1,
        name : "Devmura",
        img : "devmura",
        description: "A social network created during Generation Mexico's bootcamp. This full-stack project was developed using HTML, CSS, JavaScript, React, Vite, and deployed on Vercel",
        type: "Fullstack",
        tecnologysFront: ["html", "css", "javascript", "react", "vite", "vercel" ],
        tecnologysBack: [ "java", "spring-boot", "mysql", "railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 
    {
        id: 2,
        name : "FilMax",
        img : "filmax",
        description: "An independent project where I developed a streaming platform similar to Netflix's front-end",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", "vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/FilMax",
        linkDeploy: "https://fil-max.vercel.app/"
    }, 
    {
        id: 3,
        name : "Black Jack",
        img : "blackjack",
        description: "A front-end exercise where I created the game of Blackjack",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", "vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Black-Jack-JS",
        linkDeploy: "https://daveoval.github.io/Black-Jack-JS/"
    }, 
    {
        id: 4,
        name : "Pokedex",
        img : "pokedex",
        description: "A front-end application inspired by Pokédex, enhanced with additional features and functionalities",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Pokedex",
        linkDeploy: "https://daveoval.github.io/Pokedex/"
    }, 
    {
        id: 5,
        name : "caesar cipher",
        img : "encriptador",
        description: "A front-end application implementing the Caesar Cipher encryption technique",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/encriptador-texto-JS",
        linkDeploy: "https://daveoval.github.io/encriptador-texto-JS/"
    }, 
    {
        id: 6,
        name : "To-do list",
        img : "todo",
        description: "A front-end to-do list application with additional features and functionalities",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/todo-react",
        linkDeploy: "https://daveoval.github.io/todo-react/"
    }, 
    {
        id: 7,
        name : "Frontend-Mentor-challenges",
        img : "frontendmentorchallenges",
        description: "A collection of front-end projects inspired by Frontend Mentor challenges",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Frontend-Mentor-challenges",
        linkDeploy: "https://daveoval.github.io/Frontend-Mentor-challenges/"
    }, 
    {
        id: 8,
        name : "FreeCodeCamp-portfolio",
        img : "freecodecamp",
        description: "My portfolio showcasing various front-end projects, including some inspired by FreeCodeCamp",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/FreeCodeCamp-portfolio",
        linkDeploy: "https://daveoval.github.io/FreeCodeCamp-portfolio/"
    }, 
]

export const projectsMobile : Proyects[] = [
    {
        id: 1,
        name: "Dicee",
        img: "dicee",
        description: "A ramdom app generator dicee",
        type: "IOS app",
        tecnologysFront: ["swift"],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/dicee-ios",
        linkDeploy: "" 
    }
]
    


export const numberOfProyects: number = projectsFront.length + projectsMobile.length 