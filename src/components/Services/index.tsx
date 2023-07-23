import styled from "styled-components";
import { colorsui } from "../../ui/colors";
import { ServiceCard } from "./components/card";
import { ServicesInfo } from "../../data/service";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 4rem auto;   
    background-color: ${colorsui.backGroundGray}; 
    border-radius: 15px;
`;
const Title = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: ${colorsui.primaryColor};
`
const CardsContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    gap: 1rem;
    padding: 1rem 0;
`


export const Services = () => {
    return (
        <Container>
            <Title>Services</Title>
            <CardsContainer>
                {ServicesInfo.map((service) => {
                    return (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.text}
                            icon={service.icon}
                            color={service.color}
                        />
                    )
                })}
            </CardsContainer>
        </Container>
    )
}