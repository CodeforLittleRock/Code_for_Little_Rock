// Imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppWrapper } from './styles/wrapper/Wrapper';

// Views- What the User Sees
import Home from './view/Home';
import BlogList from './view/BlogList';
import CodeOfConduct from './view/CodeOfConduct';
import JoinUs from './view/JoinUs';
import MemberDir from './view/MemberDir';
import MemberPro from './view/MemberPro';
import ProjectGuide from './view/ProjectGuide';
import ProjectPitch from './view/ProjectPitch';
import Promotions from './view/Promotions';
import FourOhFour from './view/FourOhFour';
import GetInvolved from './view/GetInvolved';
import About from './view/About';

// Controllers- What the User Interacts With
import Nav from './controller/navigation/Nav';
import Footer from './controller/navigation/Footer';

// Models- What the Controllers Manipulate

function App() {
  return (
    <>
      {/* Style for Entire App */}
      <AppWrapper >
        {/* Links to the Pages */}
        < Nav />
        {/* All the different Pages that can be viewed */}
        <Switch>
          {/* Exact for home, Path for url, Comonent for Page Render, * Catches Page not found */}
          <Route exact path='/' component={Home} />
          <Route path='/bloglist' component={BlogList} />
          <Route path='/code-of-conduct' component={CodeOfConduct} />
          <Route path='/join-us' component={JoinUs} />
          <Route path='/member-directory' component={MemberDir} />
          <Route path='/member-profile' component={MemberPro} />
          <Route path='/project-guide' component={ProjectGuide} />
          <Route path='/project-pitch' component={ProjectPitch} />
          <Route path='/promotions' component={Promotions} />
          <Route path='/get-involved' component={GetInvolved} />
          <Route path='/about' component={About} />
          <Route path='*' component={FourOhFour} />
        </Switch>
        {/* Global Site Information */}
        <Footer />
      </AppWrapper >
    </>
  );
}

export default App;
