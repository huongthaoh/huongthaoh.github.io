import React from 'react'
import "./About.css"

function About() {
  return (
    <div id = "aboutSection" className='about'>
        <div class = "container-sm">
            <div id="about__body" class="row align-items-start">
                <div id = "section_title" class="col-4">
                    About Me
                </div>
                <div id = "about__content" class="col-7">
                    
                        <p>i'm currently a college student at Vanderbilt University, double majoring in Computer Science and Cognitive Studies. driven by a passion for education, my interest in coding emerged as i recognized its transformative potential in creating accessible learning.</p>
                        <p>as a software engineer, i enjoy incorporating my knowledge of human behavior and cognition into designing user-centered software solutions. i have had the opportunities to create products for my university's lab and a local NGO in Nashville.</p> 
                    
                </div>  
            </div>
            <div id = "skill_body" class="row align-items-start">
                <div id = "section_title" class="col-4">
                    Skills
                </div>
                <div id="skill__content" class="col">
                    <div id="skill_group" class="col">
                        <h3>languages</h3>
                        <p>JavaScript</p>
                        <p>HTML, CSS/Sass</p>
                        <p>C++</p>
                        <p>Python</p>
                        <p>SQL</p>
                        <p>R</p>
                    </div>
                    <div id="skill_group" class="col">
                        <h3>frameworks & tools</h3>
                        <p>React</p>
                        <p>Node</p>
                        <p>Bootstrap</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div> 
                </div>
            
            </div>
            </div>
        
    </div>
  )
}

export default About