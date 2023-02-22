import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Courses from './Pages/Courses';
import Events from './Pages/Events';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import Quiz from './Pages/Quiz';
import Services from './Pages/Services';

function App() {
  return (
    < >
      
      {/*Routing the pages*/}
      
      <Router className="App" >
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/contactus' element={<Contactus/>} />
        
        
      </Routes>
    </Router>
    
    <Footer/>
    </>
  );
}

export default App;
