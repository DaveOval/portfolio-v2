import styled from "styled-components";
import { colorsui } from "../../ui/colors";
import { Tooltip } from "@mui/material";


type PortfolioCardProps =  {
    key: number;
    id: number;
    name: string;
    img: string;
    description: string;
    type: string;
    tecnologysFront: string[];
    tecnologysBack: string[];
    linkGithub: string;
    linkDeploy: string;
}
const Card = styled.div`
    min-width: 300px;
    height: 450px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    color: ${colorsui.primaryColor};
`
const ImgContainer = styled.picture`
    width: 100%;
    height: 350px;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`
const CardBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardHeader = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`
const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: ${colorsui.primaryColor};
`
const CardSubTitle = styled.p`
    font-size: 1rem;
    color: ${colorsui.secondaryColor};
`
const CardText = styled.div`
    width: 90%;
    font-size: 1rem;
    color: ${colorsui.primaryColor};
    font-weight: 300;

`
const LanguajesContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 0.2rem 0;
`
const LanguajeImg = styled.img`
    width: 25px;
    height: 25px;
    fill: ${colorsui.primaryColor};
    background-color: ${colorsui.primaryColor};
    border-radius: 5px;
`

const ButtonsContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
`

const CardLink = styled.a`
    width: 90%;
    height: 40px;
    background-color: ${colorsui.primaryColor};
    color: black;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
`


export const PortfolioCard = (props : PortfolioCardProps) => {


    const { key , name, img, description, type, tecnologysFront, tecnologysBack, linkGithub, linkDeploy } = props;

    return (
        <Card key={ key }>
            <ImgContainer>
                <CardImg src={ img } alt={ name } />
            </ImgContainer>
            <CardBody>
                <CardHeader>
                    <CardTitle>{ name }</CardTitle>
                    <CardSubTitle>{ type }</CardSubTitle>
                </CardHeader>
                <CardText>{ description }</CardText>
                <LanguajesContainer>
                    { tecnologysFront.map((languaje) => {
                        return (
                            <Tooltip title={ languaje } arrow placement="top">
                                <LanguajeImg src={`./public/languajes/${languaje}.svg`}   alt={ languaje } />
                            </Tooltip>
                        )
                    }) }
                </LanguajesContainer>
                <LanguajesContainer>
                    { tecnologysBack.map((languaje) => {
                        return (
                            <Tooltip title={ languaje } arrow placement="bottom">
                                <LanguajeImg src={`./public/languajes/${languaje}.svg`}   alt={ languaje } />
                            </Tooltip>
                        )
                    }) }
                </LanguajesContainer>

                <ButtonsContainer>
                    <CardLink href={ linkGithub } target="_blank">Github</CardLink>
                    <CardLink href={ linkDeploy } target="_blank">Deploy</CardLink> 
                    
                </ButtonsContainer>

            </CardBody>

        </Card>
    );
}

PortfolioCard.defaultProps = {
    id: null,
    name: "no name",
    img: "https://placehold.jp/200x200.png,"
}