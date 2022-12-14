import React from 'react'

export default function Contact() {
  return (
    <div className='contactcontainer'>
      <h1>Let's connect!</h1>
      <p><img className="contsvg" src="github.svg" alt="github" />: <a href="https://github.com/Viserya11" target="_blank"> viserya11 </a></p>
      <p><img className="contsvg" src="email.svg" alt="" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=szucspann@outlook.com"> szucspann@outlook.com </a></p>
      <p><img className='contsvg' src="resume.svg" alt="" /><a href="cv_panna_szucs.pdf" download> Download CV </a></p>
    </div>
  )
}
