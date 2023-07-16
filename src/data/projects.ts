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
        description: "Proyecto realizado en el bootcamp de Generation Mexico en donde se creo una red social",
        type: "Fullstack",
        tecnologysFront: ["HTML", "CSS", "JavaScript", "React", "Vite", "Vercel" ],
        tecnologysBack: [ "Java", "Spring-Boot", "MySQL", "Railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 
    {
        id: 2,
        name : "FilMax",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Ejercicio en donde se creo el juego de black jack",
        type: "Front-end",
        tecnologysFront: ["HTML", "CSS", "JavaScript", "Vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/FilMax",
        linkDeploy: "https://fil-max.vercel.app/"
    }, 
    {
        id: 3,
        name : "Black Jack",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Ejercicio en donde se creo el juego de black jack",
        type: "Front-end",
        tecnologysFront: ["HTML", "CSS", "JavaScript", "Vite", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Black-Jack-JS",
        linkDeploy: "https://daveoval.github.io/Black-Jack-JS/"
    }, 
    {
        id: 4,
        name : "Pokedex",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Proyecto de una pokedex, en donde la interfaz del pokedex se utilizo css para crear la estructura del pokedex",
        type: "Front-end",
        tecnologysFront: ["HTML", "CSS", "JavaScript", ],
        tecnologysBack: [],
        linkGithub: "https://github.com/DaveOval/Pokedex",
        linkDeploy: "https://daveoval.github.io/Pokedex/"
    }, 
]

export const projectsMobile : any = [
    
]
    


export const numberOfProyects: number = projectsFront.length + projectsMobile.length 