import styled from 'styled-components';
import { colorsui } from '../../ui/colors';
import { Link } from 'react-router-dom';
import { PortfolioCard } from '../PorfolioCard';
import { projectsFront } from '../../data/projects';


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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`



export const FrontPortFolio = () => {

    

    return (
        <>
            <PortFolioContainer>
                <Header>
                    <Title>Front-end Portolio</Title>
                    <SubTitle to="/projects">See All</SubTitle>
                    <Container>
                        { projectsFront.map((project) => {
                            return (
                                <PortfolioCard 
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    img={project.img}
                                    description={project.description}
                                    type={project.type}
                                    tecnologysFront={project.tecnologysFront}
                                    tecnologysBack={project.tecnologysBack}
                                    linkGithub={project.linkGithub}
                                    linkDeploy={project.linkDeploy}
                                />
                            )
                        })
                        }
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