import { useEffect } from "react"
import { Company } from "../../components/Company"
import { comp } from "../../data/experience"



export const Experience = () => {
    
    useEffect(() => {
        document.title = "Experience | David Vazquez"
    }, [])
    
    return (
        <div>
            { comp.map((comp) => {
                return (
                    <Company
                        key={comp.id}
                        title={comp.title}
                        img={comp.img}
                        description={comp.description}
                        rol={comp.rol}
                        startdate={comp.startdate}
                        location={comp.location}
                    />
                )
            }) }
        </div>
    )
}