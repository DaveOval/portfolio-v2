import styled from "styled-components";
import { colorsui } from "../../ui/colors";


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
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 400px;
    background-color: ${colorsui.primaryColor};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImgContainer = styled.picture`
    width: 100%;
    height: 200px;
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


export const PortfolioCard = (props : PortfolioCardProps) => {

    const { key ,id, name, img, description, type, tecnologysFront, tecnologysBack, linkGithub, linkDeploy } = props;

    return (
        <Card key={ key }>
            <ImgContainer>
                <CardImg src={ img } alt={ name } />
            </ImgContainer>
            <div>
                <h3>{ name }</h3>
                <p>{ description }</p>
                <p>{ type }</p>
                <p>{ tecnologysFront }</p>
                <p>{ tecnologysBack }</p>
                <p>{ linkGithub }</p>
                <p>{ linkDeploy }</p>
                <p>{ id }</p>
            </div>

        </Card>
    );
}

PortfolioCard.defaultProps = {
    id: null,
    name: "no name",
    img: "https://placehold.jp/200x200.png,"
}