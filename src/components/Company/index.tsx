import styled from "styled-components"
import { colorsui } from "../../ui/colors";

type CompanyProps = {
    key: number;
    title: string;
    img: string;
    description: string;
    rol: string;
    startdate: string;
    finishdate?: string;
    location: string;
}

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${colorsui.primaryColor};
    margin: 4rem 0;
    width: 100%;
    text-align: center;
    margin-top: 6rem;
`
const CompanyContainer = styled.div`
    width: 100%;
    max-width: 900px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.0rem;
    color: ${colorsui.primaryColor};
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 15px; 
    background-color: ${colorsui.backGroundGray};
    max-height: 300px;
    @media (max-width: 768px) {
        flex-direction: column;
        max-height: 100%;
    }
`
const CompanyImg = styled.img`
    width: 100%;
    max-width: 300px;
    height: 100%;
    border-radius: 15px 0 0 15px;
    object-fit: cover;
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 300px;
        border-radius: 15px 15px 0 0;
    }
`
const CompanyInfo = styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 0 15px 15px 0;
    background-color: ${colorsui.backGroundGray};
    @media (max-width: 768px) {
        max-width: 90%;
        max-height: 300px;
        border-radius: 0 0 15px 15px;
        padding-bottom: 1rem;
    }
`
const CompanyTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colorsui.primaryColor};
    margin: 0;
`

export const Company = ( props : CompanyProps) => {

  const { key, title, img, description, rol, startdate, finishdate, location } = props;
  return (
    <>
        < Title > Companies I have worked for </Title>
        <CompanyContainer key={key}>
          <CompanyImg src={img} alt={title} />
          <CompanyInfo>
            <CompanyTitle>{title}</CompanyTitle>
            <p>{rol}</p>
            <p>{startdate}</p>
            <p>{finishdate}</p>
            <p>{description}</p>
            <p>{location}</p>
          </CompanyInfo>
        </CompanyContainer>
    </>
  )
}
