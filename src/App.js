import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PortHeader from './controllers/PortHeader';
import profile from './pages/profile/profile';
import contact from './pages/contact/contact';
import gallery from './pages/gallery/gallery';
import achieve from './pages/achievements/achieve';
import resume from './pages/resume/resume';
import {Helmet} from 'react-helmet';


function App() {
  return (
    <Router>
      <div className="App">
        <Helmet >
                <style>{'body { background-color: #000000de; }'}</style>
        </Helmet>
        <PortHeader/>
        <div className="pages">
          <Route exact path={process.env.PUBLIC_URL+"/"} component={profile}/>
          <Route  path="/gallery" component={gallery}/>
          <Route  path="/achievements" component={achieve}/>
          <Route  path="/resume" component={resume}/>
          <Route  path="/contact" component={contact} />
        </div>
      </div>
    </Router>
    
    );
  }
  
  export default App;
  