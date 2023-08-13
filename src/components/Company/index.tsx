import styled from "styled-components"

const CompanyContainer = styled.div`
    width: 100%;
    max-width: 900px;
    height: auto;
    display: flex;
    align-items: center;
    gap: 1.4rem;
`


export const Company = () => {
  return (
    <>
        <CompanyContainer>
            Company
        </CompanyContainer>
    </>
  )
}
