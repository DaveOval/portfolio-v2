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
`
const CompanyContainer = styled.div`
    width: 100%;
    max-width: 900px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    color: ${colorsui.primaryColor};
    margin: 0 auto;
    margin-bottom: 2rem;
    border: 1px solid red;
    border-radius: 15px; 
`


export const Company = ( props : CompanyProps) => {

  const { key, title, img, description, rol, startdate, finishdate, location } = props;
  return (
    <>
        < Title > Companies I have worked for </Title>
        <CompanyContainer key={key}>
          <p>{title}</p>
          <img src={img} alt={title} />
          <p>{description}</p>
          <p>{rol}</p>
          <p>{startdate}</p>
          <p>{finishdate}</p>
          <p>{location}</p>
        </CompanyContainer>
    </>
  )
}
