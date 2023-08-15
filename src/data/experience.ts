interface Exp {
    id: number,
    title: string,
    img: string,
    description: string,
    rol: string,
    startdate: string,
    finishdate?: string,
    location: string,
};

export const comp: Exp[] = [
    {
        id: 1,
        title: "Inotek",
        img: "./experience/inotek.png",
        description: "Technology company that provides comprehensive technological solutions.",
        rol: "Front-end Developer Jr",
        startdate: "27 jun 2023",
        location: "Zapopan, Jalisco, Mexico"
    },
];