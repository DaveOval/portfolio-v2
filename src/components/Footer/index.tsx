import styled from "styled-components"
import { colorsui } from "../../ui/colors"


const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 20vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 3rem;
`
const Contenedor = styled.div` 
    background-color: ${colorsui.backGroundGray};
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1.8rem;
    border-radius: 15px;
`
const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${colorsui.backGroundGray};
`
const Languaje = styled.img`
    width: 30px;
    height: 30px;
`
const ReactLogo = styled.img`
    width: 30px;
    height: 30px;
    animation: App-logo-spin infinite 20s linear;
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export const Footer = () =>{

    const data: Date = new Date();

    return (
        <FooterContainer>
            <Logo src="../../../public/favicon.svg" alt="" />
            <Contenedor>
                <p>Code with love with</p>
                <ReactLogo src="../../../public/react.svg" alt="" />
                <p>&</p>
                <Languaje src="../../../public/ts.svg" alt="" />
            </Contenedor>
                <p> David Vazquez - { data.getFullYear() } </p>
        </FooterContainer>
    )
}