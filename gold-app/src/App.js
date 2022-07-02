import './App.css';
import Navigation from './components/Navigation';
import OurService from './components/OurService';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/OurService" component={OurService}/>
        <Route exact path = "/WhyUs" component={WhyUs}/>
        <Route exact path = "/Testimonial" component={Testimonial}/>
        <Route exact path = "/FAQ" component={FAQ}/>
      </Routes>
    </div>
  );
}

export default App;
