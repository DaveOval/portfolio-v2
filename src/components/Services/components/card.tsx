import styled from "styled-components";
import { colorsui } from "../../../ui/colors";
import { useState } from "react";

const Container = styled.div`
    width: 90%;
    height: auto;
    color: ${colorsui.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    flex-direction: column;
    background-color: ${colorsui.secondaryColor};
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
`
const Header = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    color: ${colorsui.backGroundColor};
    border-radius: 15px 15px 0 0;
`
const Arrow = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
    &:active{
        transform: scale(1.1);
    }
    &:focus{
        transform: scale(1.1);
    }
`
interface BodyProps {
    visible: boolean;
}
const Body = styled.div<BodyProps>`
    width: 80%;
    height: ${props => ( props.visible ? "fit-content" : "0")};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: ${colorsui.backGroundGray};
    overflow: hidden;
    font-size: 1.5rem;
    padding: 0;
    transition: all 0.5s ease-in-out;
`
const TextBody = styled.p`
    /* padding: 1rem 0; */
    padding-bottom: 1rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 1.5rem;
`

export const ServiceCard = (props: any) => {

    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    const { key, title, description, icon, /* color */ } = props;
    return (
        <Container key={key}>
            <Header>
                <picture>
                    <p>{icon}</p>
                </picture>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <Arrow src="./arrow-down.svg" alt="arrow" onClick={handleVisible}/>
                </div>
            </Header>
            <Body visible={visible}>
                <TextBody>{description}</TextBody>
            </Body>
        </Container>
    )
}