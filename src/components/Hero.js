import React from 'react'
import "./Hero.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import pfp from "../pfp.png"

function Hero() {
  return (
    <div className='hero'>
      <div class = "container">
        <h2 className='hero__hi'>hi there!</h2>
        <div className="hero__info">
            <h2>i'm <span>Thao Hoang</span>, a web development enthusiast and aspiring software engineer. i'm passionate about technology, education, and psychology, and aim to create human-centered products that leverages the intersection of these fields.
            </h2>
            <img src={pfp} alt="pfp" ></img>
            <ul className='home-heroSci'>
              <li><a href="https://www.linkedin.com/in/thao-h-hoang/" target = "_blank"><LinkedInIcon/></a></li>
              <li><a href="mailto: hoanghuongthao03@gmail.com"><EmailIcon/></a></li>
              <li><a target = "_blank" href="https://github.com/huongthaoh"><GitHubIcon/></a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Hero