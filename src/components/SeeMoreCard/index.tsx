
import { Link } from "react-router-dom"
import styled from "styled-components"
import { colorsui } from "../../ui/colors"

const Card = styled(Link)`
    min-width: 300px;
    height: 450px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    color: ${colorsui.primaryColor};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(0.9);
    }
`


export const SeeMoreCard = () => {
    

    return (
        <Card to="/projects">
            <p>See more projets</p>
        </Card>
    )
}