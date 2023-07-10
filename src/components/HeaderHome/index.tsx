import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { colorsui } from '../../ui/colors';
import { yearsOfExperience } from '../../utility/years';
import { Tooltip } from '@mui/material';

const NavContainer = styled.header`
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 11vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colorsui.primaryColor};
    gap: 1rem;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    
`
const LeftContainer = styled.div`
    width: 95%;
    flex-grow: 1;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    gap: 1rem;
`
const LeftContainerHeader = styled.div`
    width: 100%;
    background: ${colorsui.backGroundGray};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    p{
        padding-top: 1rem;
        width: 90%;
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.2;
    }
`
const Button = styled(Link)`
    padding: 1rem 2rem;
    background: ${colorsui.primaryColor};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${colorsui.backGroundColor};
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    &:hover{
        background: ${colorsui.accent};
        color: ${colorsui.primaryColor};
        box-shadow: 0px 0px 10px 0px ${colorsui.accent};
    }
`
const LeftContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 33%;
    height: 145px;
    background: ${colorsui.primaryColor};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover{
        background: ${colorsui.secondaryColor};
    }
`
const CardTitle = styled.p`
    width: 80%;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colorsui.backGroundColor};
    text-align: center;
    word-wrap: break-word;
`
const CardDescription = styled.p`
    font-size: 1.0rem;
    text-align: center;
    color: ${colorsui.backGroundGray};
`

const RigthContainer = styled.div`
    flex-grow: 1;
    height: 50%;
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`
const RigthContainerHeader = styled.div`
    width: 100%;
    height: auto;
    border-radius: 15px;
    padding: 0.5rem 0;
    background-color: ${colorsui.backGroundGray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const RigthContainerHeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colorsui.primaryColor};
    text-align: center;
    word-wrap: break-word;
`
const RigthContainerHeaderDescription = styled.p`
    font-size: 1.0rem;
    color: ${colorsui.secondaryColor};
    text-align: center;
    word-wrap: break-word;
`
const RigthContainerBody = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    picture{
        width: 50%;
        border-radius: 50%;
        background-color: ${colorsui.backGroundGray};
    }
`
const Photo = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`
const RigthContainerBodyDescription = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
const NickName = styled.div`
    width: 95%;
    height: auto;
    padding: 1rem 0;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: ${colorsui.backGroundGray};
`
const BaseIn = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${colorsui.backGroundGray};
    padding: 1rem 0;
    gap: 1rem;
`
const ImageContainer = styled.picture`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BaseInImg = styled.img`
    width: 40px;
    object-fit: cover;
    margin: auto;
    filter: invert(100%);
`
const ContrastLetter = styled.p`
    color: ${colorsui.primaryColor};
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
`
const Flag = styled.img`
    width: 30px;
    object-fit: cover;
`
export const HeaderHome = () =>{
    return (
        <NavContainer>
            <LeftContainer>
                <LeftContainerHeader>
                    <p>Realize your ideas through your proficiency in iOS and Front-end development.</p>
                    <Button to="/contact">Contact me ✌️</Button>
                </LeftContainerHeader>
                <LeftContainerCards>
                    <Card>
                        <CardTitle>{ yearsOfExperience } +</CardTitle>
                        <CardDescription>Experience</CardDescription>
                    </Card>
                    <Card>
                        <CardTitle>1</CardTitle>
                        <CardDescription>Handle Project</CardDescription>
                    </Card>
                    <Card>
                        <CardTitle>1</CardTitle>
                        <CardDescription>Clients</CardDescription>
                    </Card>
                </LeftContainerCards>
            </LeftContainer>
            <RigthContainer>
                <RigthContainerHeader>
                    <RigthContainerHeaderTitle>David Vazquez</RigthContainerHeaderTitle>
                    <RigthContainerHeaderDescription>IOS Developer && Front-end Developer</RigthContainerHeaderDescription>
                </RigthContainerHeader>
                <RigthContainerBody>
                    <picture>
                        <Photo src="/favicon.svg" alt="" />
                    </picture>
                    <RigthContainerBodyDescription>
                        <NickName>
                            <ContrastLetter>Nick name:</ContrastLetter>
                            <p>Dave_U</p>
                        </NickName>
                        <BaseIn>
                            <ContrastLetter>Based in:</ContrastLetter>
                            <p>Guadalajara, Mexico</p>
                            <ImageContainer>
                                <BaseInImg src="/location.svg" alt="" />
                            </ImageContainer>
                        </BaseIn>
                        <NickName>
                            <Tooltip title="Native language" placement="top">
                                <Flag src="/mx.svg" alt="" />
                            </Tooltip>
                            <Tooltip title="B2" placement="top">
                                <Flag src="/usa.svg" alt="" />
                            </Tooltip>    
                        </NickName>
                    </RigthContainerBodyDescription>
                </RigthContainerBody>
            </RigthContainer>
        </NavContainer>
    )
}
