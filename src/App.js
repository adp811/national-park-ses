import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Activities from './Pages/Activities';
import Blog from './Pages/Blog';
import Webcams from './Pages/Webcams';
import ActivityInfo from './Pages/ActivityInfo';
import Navigation from './Components/Navigation';
import { Routes, Route } from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';


function App() {
  return (
    <div className="App">
    
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/webcams" element={<Webcams />} />
        <Route exact path="/activityInfo" element={<ActivityInfo />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
