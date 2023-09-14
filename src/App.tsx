import { Navbar } from "./components/Nav"
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Home } from "./pages/Home/index";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { ErrorPage } from "./pages/Error";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 10vh;
  height: auto;
  @media (min-width: 768px) {
    margin-top: 8vh;
  }
`


function App() {

  return (
    <Router>
      <Navbar/>
      <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Main>
      <Footer/>
    </Router>
  )
}

export default App
