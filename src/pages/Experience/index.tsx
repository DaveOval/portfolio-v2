import { Company } from "../../components/Company"
import { comp } from "../../data/experience"



export const Experience = () => {
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