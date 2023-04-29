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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMembers />
      <Services />
    </div>
  );
}

export default App;
