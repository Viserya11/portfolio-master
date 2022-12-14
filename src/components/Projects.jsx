import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Project from "./Project";

class Projects extends React.Component {
    render() {
      return (
        <>
        <h3>Projects</h3>
        <Container>
        <Row className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          <Col> <Project img={"./netflixapp.png"} title="Netflix Clone | React.js + Bootstrap" description="An API-based copy of the homepage of Netflix with three selected series, built with React.js, styled with Bootstrap and CSS3." href="https://github.com/Viserya11/React-Netflix" href2="https://netflix-react-homepage.vercel.app/"/> </Col>
          <Col ><Project img={"./weatherapp.png"} title="Weather App | React.js + Bootstrap" description="An API-based weather application that shows the current temperature at the location you chose, built with React.js, Redux and Bootstrap." href="https://github.com/Viserya11/weather-app-react" href2="https://weatherapp-react-redux.vercel.app/"/></Col>
          <Col><Project img={"./spotifyapp.png"} title="Spotify Clone | JavaScript + Bootstrap" description="An API-based copy of Spotify, the result of working in a team for five days. We used JavaScript, Bootstrap and CSS3." href="https://github.com/Viserya11/Spotify-Clone" href2=""/></Col>
        </Row>
      </Container>
      </>
      )
    }

  }

  export default Projects