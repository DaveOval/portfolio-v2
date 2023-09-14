import styled from "styled-components"
import { colorsui } from "../../ui/colors"
import { projectsFront } from "../../data/projects"
import { CardComplete } from "../../components/CardComplete"
import { useEffect } from "react"


const Main = styled.main`
    height: auto;
    width: 100%;
    max-width: 1200px;
    background-color: ${colorsui.backGroundGray};
    margin: 0 auto;
    margin-top: 10vh;
    color: ${colorsui.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.p`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
`
const ProjectsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`

export const Projects = () => {
    useEffect(() => {
        document.title = "Projects | David Vazquez"
    }, [])
    
    return (
        <Main>
            <Title>Projects</Title>
            <Title>Projects Front-end</Title>
                <ProjectsContainer>
                    { projectsFront.map((project) => {
                        return (
                            <CardComplete 
                                id={project.id}
                                img={project.img}
                                name={project.name}
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
                </ProjectsContainer>
        </Main>
    )
}