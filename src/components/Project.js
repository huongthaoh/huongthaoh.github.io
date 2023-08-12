import React from 'react'
import "./Project.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import satweb from "./satweb.png"


function Project() {
  return (
    <div id = "projectSection" className='proj'>
        <div class="container-sm">
        <div id = "section_title" class="col-4">Projects</div>

        <div class="row justify-content-center">
          {/* <a className='project__card' href='#' target="_blank">

            <div className = "project__cardText">
              <h2>Business Website</h2>
              <p>A web application built on the MEAN (MongoDB, Express, Angular, Node) stack for my web development course at Northeastern. I created this web app with the intention of providing Northeastern Students a better experience browsing the courses offered at Northeastern.</p>
              
              <a id = "call-action">see more <ArrowForwardIcon/></a>
            </div>
            
            <div className = "project__cardImg">
              <img src="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"  alt="" />
            </div>
          </a> */}

          <div className='project__card'>

          <div className = "project__cardText">
            <h2>SAT Tutoring Website</h2>
            <p>A responsive website built on the <mark>MERN stack</mark> for my friends’ SAT Tutoring Business that results in a <mark>30% increase</mark> in inquiries and conversations. The website supports <mark>Facebook Messenger Integration</mark> and includes an user-friendly posting feature for the business owner to <mark>edit and update posts.</mark></p>
            
            <a id = "call-action" href='https://github.com/huongthaoh/sat-tutoring-web' target= "_blank">see more <ArrowForwardIcon/></a>
          </div>

          <div className = "project__cardImg">
            <img src= {satweb} alt="sat web landing page" />
          </div>
          </div>

          <div className='project__card'>

            <div className = "project__cardText">
              <h2>Survey Response Coding Helper</h2>
              <p>An automated tool that expedites textual data coding via dictionary-based text analysis. Enables <mark>user authentication and authorization</mark> with role-based access control.</p>
              
              <a id = "call-action" href=''>see more <ArrowForwardIcon/></a>
            </div>
            
            <div className = "project__cardImg">
              {/* <img src=""  alt="" /> */}
            </div>
          </div>

          
        </div>


        

        </div>
    </div>
  )
}

export default Project


