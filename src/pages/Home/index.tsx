import { FrontPortFolio } from "../../components/Portfolio"
import { HeaderHome } from "../../components/HeaderHome"
import { SkillsAndTechnologies } from "../../components/SkillsAndTechnologies"


export const Home = () => {
    return (
        <>
            <HeaderHome />
            <FrontPortFolio />
            <SkillsAndTechnologies />
        </>
    )
}