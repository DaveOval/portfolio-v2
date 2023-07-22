import styled from "styled-components"
import { yearsOfExperience } from "../../utility/years"
import { colorsui } from "../../ui/colors"


const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;
    border-radius: 15px;
    color: ${colorsui.primaryColor};
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M768.5 697Q727 894 505 885.5t-295-197q-73-188.5 17.5-346t287-182.5q196.5-25 246 157.5t8 379.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%230D3DA0%22 d=%22M768.5 697Q727 894 505 885.5t-295-197q-73-188.5 17.5-346t287-182.5q196.5-25 246 157.5t8 379.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
`
const Years = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${colorsui.primaryColor};
    text-align: center;
    @media (min-width: 768px) {
        font-size: 4rem;
    }
`
const Subtitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colorsui.primaryColor};
    text-align: center;
    padding: 1rem 0;
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`
  

export const ExperienceCard = () => {
    return (
        <Container>
            <Years>{yearsOfExperience} of XP</Years>
            <Subtitle>From Figma to website or Mobile</Subtitle>
            <p>I really like to work across all kinds of technologies</p>
        </Container>
    )
}