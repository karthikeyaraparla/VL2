import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Iam from './pages/Iam';
import Iwanto from './pages/Iwanto';
import Analytics from './pages/Analytics';
import Virtuallabs from './pages/Virtual-labs';
import Vlead from './pages/Vlead';
import HostWorkshop from './pages/HostWorkshop';
import CreateExperiment from './pages/CreateExperiment';
import StartLearning from './pages/StartLearning';
import ExploreResearch from './pages/ExploreResearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Iam />} />
          <Route path="/login" element={<Iwanto />} />
          <Route path="/eventslist" element={<Analytics />} />
          <Route path="/virtual-labs" element={<Virtuallabs />} />
          <Route path="/vlead" element={<Vlead />} />
          <Route path="/host-workshop" element={<HostWorkshop />} />
          <Route path="/create-experiment" element={<CreateExperiment />} />
          <Route path="/start-learning" element={<StartLearning />} />
          <Route path="/explore-research" element={<ExploreResearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
