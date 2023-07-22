import styled from "styled-components";
import { colorsui } from "../../ui/colors";
import { skillsAndTechnologies } from "../../data/languages";
import { Tooltip } from "@mui/material";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    background-color: ${colorsui.backGroundGray};
    height: auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 3rem auto;
    color: ${colorsui.primaryColor};
    border-radius: 15px;
    p{
        font-size: 1.5rem;
    }
`
const Languages = styled.div`
    width: 95%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;
`
const Language = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${colorsui.secondaryColor};
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    background-color: ${colorsui.primaryColor};
    &:hover{
        transform: scale(1.2);
        background-color: ${colorsui.primaryColor};
    }
`


export const SkillsAndTechnologies = () => {

    return (
        <Container>
            <p>Skills and Technologies</p>
            <Languages>
                {skillsAndTechnologies.map((item) => {
                    return (
                        <Tooltip title={item} arrow >
                            <Language key={ skillsAndTechnologies.indexOf(item) } src={`languajes/${item}.svg`}  />
                        </Tooltip>
                    )}
                )}
            </Languages>  
        </Container>
    )
}


