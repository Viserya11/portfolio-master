import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';


function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      
      defaultActiveKey={"about"}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="about" title="Home">
        <About/>
        <Projects />
      </Tab>
       
      <Tab eventKey="contact" title="Contact" >
        <Contact/>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;