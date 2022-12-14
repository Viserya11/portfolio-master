import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Project(prompt) {
  return (
    <>
      <Card>
        {" "}
        <Card.Title className="title">{prompt.title}</Card.Title>{" "}
       
          <Card.Img variant="top" src={prompt.img} />
          <Card.Body>
            <Card.Text>
             {prompt.description}
            </Card.Text>
            <div className="buttonflex">
            <a href={prompt.href} target="_blank" rel="noreferrer"><button className="cardbutton" variant="primary">
              Code
            </button></a>
            <a href={prompt.href2} target="_blank" rel="noreferrer"><button className="cardbutton2" variant="primary">
              Preview
            </button></a>
          </div>
          </Card.Body>
          {" "}
        
      </Card>
    </>
  );
}
