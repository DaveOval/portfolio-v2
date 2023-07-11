import { Navbar } from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Home } from "./pages/Home/index";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { ErrorPage } from "./pages/Error";


function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}

export default App
