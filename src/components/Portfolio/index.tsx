import styled from 'styled-components';
import { colorsui } from '../../ui/colors';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const PortFolioContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colorsui.backGroundGray};
    margin-top: 2rem;
    border-radius: 15px;
`
const Header = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const Title = styled.h3`
    padding: 1rem 0;
    font-size: 1.5rem;
    color: ${colorsui.primaryColor};
`
const SubTitle = styled(Link)`
    padding: 1rem 0;
    font-size: 1.5rem;
    color: ${colorsui.secondaryColor};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover{
        color: #999999;
    }
`
const Button = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background-color: ${colorsui.primaryColor};
    color: ${colorsui.backGroundGray};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${colorsui.secondaryColor};
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const CardsContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* flex-wrap: wrap; */
    /* overflow-x: scroll; */
`
const Card = styled.div`
    width: 345px;
    height: 300px;
    margin: 1rem;
    border-radius: 15px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`


export const FrontPortFolio = () => {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const previousCards = () => {
        setCurrentCardIndex( prevIndex => prevIndex - visibleCards )
    }
    const nextCards = () => {
        setCurrentCardIndex( prevIndex => prevIndex + visibleCards )
    }

    return (
        <>
            <PortFolioContainer>
                <Header>
                    <Title>Front-end Portolio</Title>
                    <SubTitle to="/projects">See All</SubTitle>
                    <Container>
                        <Button onClick={previousCards} disabled={currentCardIndex === 0 }>{"<"}</Button>
                        <CardsContainer>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                            <Card>
                                <img src="https://picsum.photos/200/300" alt="img" />
                            </Card>
                        </CardsContainer>
                        <Button onClick={nextCards} disabled={currentCardIndex >= 60}>{">"}</Button>
                    </Container>
                </Header>
            </PortFolioContainer>
            <PortFolioContainer>
                <Header>
                    <Title>Mobile Portolio</Title>
                    <SubTitle to="/projects">See All</SubTitle>
                </Header>
            </PortFolioContainer>
        </>
    )
}