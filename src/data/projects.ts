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
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Project developed during Generation Mexico's bootcamp, where a social network was created",
        type: "Fullstack",
        tecnologysFront: ["html", "css", "javascript", "react", "vite", "vercel" ],
        tecnologysBack: [ "java", "spring-boot", "mysql", "railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 
    {
        id: 2,
        name : "FilMax",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Project independently undertaken, where I developed a streaming platform similar to Netflix",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", "vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/FilMax",
        linkDeploy: "https://fil-max.vercel.app/"
    }, 
    {
        id: 3,
        name : "Black Jack",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Exercise in which the game of blackjack was created",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", "vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Black-Jack-JS",
        linkDeploy: "https://daveoval.github.io/Black-Jack-JS/"
    }, 
    {
        id: 4,
        name : "Pokedex",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I created a Pokédex-inspired application with additional features and functionalities.",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Pokedex",
        linkDeploy: "https://daveoval.github.io/Pokedex/"
    }, 
    {
        id: 5,
        name : "caesar cipher",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I created a Pokédex-inspired application with additional features and functionalities.",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/encriptador-texto-JS",
        linkDeploy: "https://daveoval.github.io/encriptador-texto-JS/"
    }, 
    {
        id: 6,
        name : "To-do list",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I created a Pokédex-inspired application with additional features and functionalities.",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/todo-react",
        linkDeploy: "https://daveoval.github.io/todo-react/"
    }, 
    {
        id: 7,
        name : "Frontend-Mentor-challenges",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I created a Pokédex-inspired application with additional features and functionalities.",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Frontend-Mentor-challenges",
        linkDeploy: "https://daveoval.github.io/Frontend-Mentor-challenges/"
    }, 
    {
        id: 8,
        name : "FreeCodeCamp-portfolio",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I created a Pokédex-inspired application with additional features and functionalities.",
        type: "Front-end",
        tecnologysFront: ["html", "css", "javascript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/FreeCodeCamp-portfolio",
        linkDeploy: "https://daveoval.github.io/FreeCodeCamp-portfolio/"
    }, 
]

export const projectsMobile : any = [
    
]
    


export const numberOfProyects: number = projectsFront.length + projectsMobile.length 