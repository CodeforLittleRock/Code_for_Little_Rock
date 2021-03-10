// Imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppWrapper } from './styles/Style';

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

// Controllers- What the User Interacts With
import Nav from './controller/Nav';
import Footer from './controller/Footer';

// Models- What the Controllers Manipulate

function App() {
  return (
    <AppWrapper>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bloglist' component={BlogList} />
        <Route path='/code-of-conduct' component={CodeOfConduct} />
        <Route path='/join-us' component={JoinUs} />
        <Route path='/member-dir' component={MemberDir} />
        <Route path='/member-pro' component={MemberPro} />
        <Route path='/project-guide' component={ProjectGuide} />
        <Route path='/project-pitch' component={ProjectPitch} />
        <Route path='/promotions' component={Promotions} />
        <Route path='*' component={FourOhFour} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}

export default App;
