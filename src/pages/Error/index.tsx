import { useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    height: 70vh;
    h1{
        font-size: 5rem;
        color: #ffffff;
        margin-bottom: 20px;
        text-wrap: balance;
    }
    img{
        width: 100%;
        max-width: 250px;
    }
`




export const ErrorPage = () => {
    useEffect(() => {
        document.title = "Error :( | David Vazquez"
    }, [])
    return (
        <Container>
            <h1>Page not found 😢</h1>
            <img src="/error404.gif"/>
        </Container>
    )
}