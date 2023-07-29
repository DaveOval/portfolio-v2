import { FrontPortFolio } from "../../components/Portfolio"
import { HeaderHome } from "../../components/HeaderHome"
import { SkillsAndTechnologies } from "../../components/SkillsAndTechnologies"
import { ExperienceCard } from "../../components/ExperienceCard"
import { Services } from "../../components/Services"

export const Home = () => {
    return (
        <>
            <HeaderHome />
            <SkillsAndTechnologies />
            <FrontPortFolio />
            <ExperienceCard />4
            <Services/>
        </>
    )
}