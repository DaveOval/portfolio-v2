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
        tecnologysBack: [ "Java", "Spring Boot", "MySQL", "Railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 
    {
        id: 2,
        name : "Calculadora",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Proyecto realizado en el bootcamp de Generation Mexico en donde se creo una red social",
        type: "Fullstack",
        tecnologysFront: ["HTML", "CSS", "JavaScript", "React", "Vite", "Vercel" ],
        tecnologysBack: [ "Java", "Spring Boot", "MySQL", "Railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 
    {
        id: 3,
        name : "BlackJack",
        img : "https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-ciudad-calle-edificio-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Proyecto realizado en el bootcamp de Generation Mexico en donde se creo una red social",
        type: "Fullstack",
        tecnologysFront: ["HTML", "CSS", "JavaScript", "React", "Vite", "Vercel" ],
        tecnologysBack: [ "Java", "Spring Boot", "MySQL", "Railway" ],
        linkGithub: "https://github.com/im-Michelle/DevMura",
        linkDeploy: "https://dev-mura.vercel.app/"
    }, 


]