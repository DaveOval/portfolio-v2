import styled from "styled-components"
import { colorsui } from "../../ui/colors"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin-top: 11vh;
    margin: 0 auto;
    height: 90vh;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${colorsui.primaryColor};
    width: 90%;
    height: fit-content;
    border-radius: 15px;
    color: ${colorsui.backGroundColor};
    transition: all 0.5s ease-in-out;
    &:hover {
        box-shadow: 0px 1px 36px 0px rgba(15,58,173,0.61);;
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    margin-top: 20px;
`
const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid ${colorsui.backGroundColor};
    margin-right: 20px;
`
const Text = styled.p`
    padding: 1rem 1rem;
    border-radius: 25px;
    border: 1px solid ${colorsui.backGroundColor};
    background-color: ${colorsui.backGroundColor};
    color: ${colorsui.primaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: cell;
    &:hover {
        background-color: ${colorsui.secondaryColor};
        color: ${colorsui.backGroundColor};
    }
`
const Botton = styled.div`
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #6CDC6F;
    border: 1px solid #0A8F0D;
`
const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    margin-bottom: 20px;
`
const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
    min-width: 200px;
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    margin-bottom: 20px;
    min-width: 200px;
    gap: 1rem;
`
const DowloadButton = styled.a`
    width: 90%;
    padding: 1rem 0rem;
    border-radius: 15px;
    border: 1px solid ${colorsui.backGroundColor};
    background-color: ${colorsui.backGroundColor};
    color: ${colorsui.primaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: ${colorsui.secondaryColor};
        color: ${colorsui.backGroundColor};
    }
    &:hover > img {
        filter: invert(0);
    }
`
const DowloadImg = styled.img`
    width: 30px;
    height: 30px;
    filter: invert(1); 
`
const SendEmail = styled.a`
    width: 90%;
    padding: 1rem 0rem;
    border-radius: 15px;
    border: 1px solid ${colorsui.backGroundColor};
    background-color: ${colorsui.backGroundColor};
    color: ${colorsui.primaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: ${colorsui.secondaryColor};
        color: ${colorsui.backGroundColor};
    }
    &:hover > img {
        filter: invert(0);
    }
`    

export const Contact = () => {
    return (
        <Container>
            <Card>
                <Header>
                    <Img src="./favicon.svg" alt="" />
                    <Text>
                        <Botton></Botton>
                        Available for work
                    </Text>
                </Header>
                <Body>
                    <Left>
                        <Title>Drop me a line or say ✌️on social networks Whether you're a aojwdnlakjwndl akndwlawnk</Title>
                        <p>Whether you're a developinhg team in need of support or an early-stage company looking to level up your project, I'd love to talk about your project</p>
                    </Left>
                    <Right>
                        <DowloadButton 
                            href="https://www.canva.com/design/DAFj99ocOVs/NXbqdvvuFzx0Rl9GJJTt9g/edit?utm_content=DAFj99ocOVs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                            target="_blank">
                                <DowloadImg src="./dowload.svg" alt="dowload" />
                                See my CV
                        </DowloadButton>
                        <SendEmail href="mailto:dave_u@outlook.com">
                            <DowloadImg src="./email.svg" alt="email" />
                            Send me an email
                        </SendEmail>
                    </Right>
                </Body>
            </Card>
        </Container>
    )
}