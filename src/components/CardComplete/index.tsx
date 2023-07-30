import styled from "styled-components";
import { colorsui } from "../../ui/colors";
import { Link } from "react-router-dom";

type CardCompleteProps = {
    id: number;
    img: string;
    name: string;
    description: string;
    type: string;
    tecnologysFront: string[];
    tecnologysBack: string[];
    linkGithub: string;
    linkDeploy: string;
}

const Card = styled.div`
    width: 100%;
    height: 550px;
    background-color: ${colorsui.backGroundColor};
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 450px;
`
const CardImg = styled.picture`
    width: 100%;
    height: 300px;
    min-height: 300px;
    max-height: 300px;
    border-radius: 10px;
    margin-bottom: 1rem;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const CardHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p{
        font-size: 1.2rem;
        font-weight: 300;
    }
    margin-bottom: 0.5rem;
`
const Description = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 1rem;
`

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: auto;
`
const Button = styled(Link)`
    width: 45%;
    height: 50px;
    background-color: ${colorsui.primaryColor};
    color: ${colorsui.backGroundColor};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${colorsui.accent};
        color: ${colorsui.primaryColor};
    }
`
const SVGContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
`
const SVG = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
    background-color: white;
    border-radius: 5px;
`


export const CardComplete = (props: CardCompleteProps) => {
    const {  id , img , name , description , type , tecnologysFront , tecnologysBack, linkGithub , linkDeploy } = props;
    return (
        <Card key={id}>
            <CardImg>
                <Img src={`projectsIMG/${img}.webp`} alt={name} loading="lazy"/>
            </CardImg>
            <CardHeader>
                <p>{name}</p>
                <p>{type}</p>
            </CardHeader>
            <Description>{description}</Description>
                <SVGContainer>
                    {tecnologysFront.map((item) => {
                        return (
                            <SVG key={tecnologysFront.indexOf(item)} src={`languajes/${item}.svg`} loading="lazy"/>
                        )
                    })}
                    {tecnologysBack.map((item) => {
                        return (
                            <SVG key={tecnologysBack.indexOf(item)} src={`languajes/${item}.svg`} loading="lazy"/>
                        )
                    })
                    }
                </SVGContainer>
            <ButtonsContainer>
                <Button to={linkGithub} target="_blank">Github</Button>
                <Button to={linkDeploy} target="_blank">Deploy</Button>
            </ButtonsContainer>
        </Card>
    )
}