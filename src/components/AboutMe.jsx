import React from "react";

export default function About() {
  return (
    <>
      <div className="aboutflex">
        <img className="picofme" src="picofme.png" alt="picture of me" />
        <div className="aboutmetext">
          <h1>Panna Szűcs</h1>
          <p>
            Hello! I'm a Junior Front-End Developer from Budapest, Hungary,
            currently looking for work. I speak Hungarian, English and the
            languages displayed below. If you are interested in working
            together, don't hesitate to contact me!
            <div className="icons">
            <img className="svg" src="html.svg" alt="HTML5" />
            <img className="svg" src="css.svg" alt="CSS3" />
            <img className="svg" src="javascript.svg" alt="JavaScript" />
            <img className="svg" src="react.svg" alt="React.js" />
            <img className="svg" src="bootstrap.svg" alt="Bootstrap" />
          </div>
          </p>
          
        </div>
      </div>
    
    </>
  );
}
