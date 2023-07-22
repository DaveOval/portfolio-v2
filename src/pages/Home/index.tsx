import { FrontPortFolio } from "../../components/Portfolio"
import { HeaderHome } from "../../components/HeaderHome"
import { SkillsAndTechnologies } from "../../components/SkillsAndTechnologies"
import { ExperienceCard } from "../../components/ExperienceCard"



export const Home = () => {
    return (
        <>
            <HeaderHome />
            <SkillsAndTechnologies />
            <ExperienceCard />
            <FrontPortFolio />
        </>
    )
}