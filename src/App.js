import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import MainTitle from './Components/MainTitle/MainTitle';
import Articles from './Components/Articles/Articles';
import Gallery from './Components/Gallery/Gallery';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import TeamMembers from './Components/TeamMembers/TeamMembers';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import WorkSteps from './Components/WorkSteps/WorkSteps';
import Events from './Components/Events/Events';
import Pricing from './Components/Pricing/Pricing';
import Videos from './Components/Videos/Videos';
import Stats from './Components/Stats/Stats';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
