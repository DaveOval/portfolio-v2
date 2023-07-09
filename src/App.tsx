import { Navbar } from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Home } from "./pages/Home/index";
import { Contact } from "./pages/Contact";


function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
