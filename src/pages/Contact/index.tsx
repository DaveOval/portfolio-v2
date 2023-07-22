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
    max-width: 1000px;
    height: 100%;
    max-height: 300px;
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
    margin-bottom: 20px;
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
    justify-content: flex-start;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 20px;
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
                    <div>
                        <p>Drop me a line or say ✌️on social networks Whether you're a aojwdnlakjwndl akndwlawnk</p>
                        <p>Whether you're a developinhg team in need of support or an early-stage company looking to level up your design, I'd love to talk about your project</p>
                    </div>
                    <div>

                    </div>

                </Body>
            </Card>
        </Container>
    )
}