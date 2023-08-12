import React from 'react'
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';



const FooterIcon = ({Icon, html}) => {
  return (
    <a href = {html} target="_blank"><IconButton>
      {Icon}
    </IconButton></a>
  )
}

export default function Footer() {
  return (
    <div class = "container-sm">
      <div className='footer'>
      
        <h3>by Thao Hoang @ 2023</h3>

        <div className="footer__social">
          <ul className='footer__social'>
            <li><FooterIcon Icon = {<LinkedInIcon/>} html="https://www.linkedin.com/in/thao-h-hoang/" /> </li>
            <li><FooterIcon Icon = {<EmailIcon/>} html="mailto:hoanghuongthao03@gmail.com" /> </li>
            <li><FooterIcon Icon = {<GitHubIcon/>} html="https://github.com/huongthaoh" /> </li>

          </ul>

         

        </div>
  

      </div>

      
 
    </div>
  )
}
