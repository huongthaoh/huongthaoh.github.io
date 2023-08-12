import "./Experience.css"
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import resume from "../resume.pdf"


function Exp() {
    const [selectedItem, setSelectedItem] = useState('item1');

    const handleClick = (e, itemId) => {
        e.preventDefault();
        setSelectedItem(itemId);
    };
    
  return (
    <div id = "expSection" className='exp'>
        <div class = "container-sm">
            {/* <div id = "section_title" class="col-4">Experience</div> */}
            
        <div class="row" >
            <div class="col-4">
                <div id = "section_title">Experience</div>
                
                <div id="list-example" class="list-group list-group-flush">
                
                <a className={`list-group-item list-group-item-action $(selectedItem === 'item1' && 'active'}`} href="#expSection" onClick = {(e) => handleClick(e, 'item1')} style={{ color: selectedItem === 'item1' ? 'var(--cl-btn)' : 'inherit'}}>Data Analyst Intern</a>

                <a className={`list-group-item list-group-item-action $(selectedItem === 'item2' && 'active'}`} href="#list-item-2" onClick = {(e) => handleClick(e, 'item2')} style={{ color: selectedItem === 'item2' ? 'var(--cl-btn)' : 'inherit' }}>Research Assistant</a>
                <a className={`list-group-item list-group-item-action $(selectedItem === 'item3' && 'active'}`} href="#expSection" onClick = {(e) => handleClick(e, 'item3')}style={{ color: selectedItem === 'item3' ? 'var(--cl-btn)' : 'inherit' }}>SWE Intern</a>
                <a className={`list-group-item list-group-item-action $(selectedItem === 'item4' && 'active'}`} href="#list-item-4" onClick = {(e) => handleClick(e, 'item4')}style={{ color: selectedItem === 'item4' ? 'var(--cl-btn)' : 'inherit' }}>Mentor</a>
                </div>
            </div>
            
            <div id = "exp__content" class="col-7">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                    
                    {selectedItem === 'item1' && (
                        
                        
                        <a className='list-group-item list-group-item-action' href='#'>
                        
                        <h4 id="list-item-1">
                            <div id ="section_title">PLACEHOLDER</div>
                            <span>Data Analyst Intern</span> @ <span style = {{color: "var(--cl-accent)"}}>Vanderbilt University</span>
                        </h4>
                        <p><small>May - August 2023</small></p>
                        <ul className="exp__list">
                            <li>
                                Awarded $5000 by Vanderbilt’s Data Science Department to develop an automated tool for coding textual data in misinformation research. 
                            </li>
                            <li>
                                Final product is presented at school-wide research fair and adopted for use at Vanderbilt’s Building Knowledge lab. 
                            </li>
                        </ul>

                       </a>
                        
                    )}

                    {selectedItem === 'item2' && (
                        <a className='list-group-item list-group-item-action active' href='#'>
                        <h4 id="list-item-2">
                            <div id ="section_title" style={{opacity: "0%"}}>PLACEHOLDER</div>
                            <span>Research Assistant</span> @ <span style = {{color: "var(--cl-accent)"}}>Vanderbilt University</span>
                        </h4>
                        <p><small>Dec 2022 - Present</small></p>
                        <ul className="exp__list">
                            <li>
                            Create surveys with JavaScript on Qualtrics. Monitor survey launches on Cloud Research. Build models in R to clean and analyze said data.
                            </li>
                            <li>
                            Streamline the data/stimuli collection process by developing a web-scrapping tool in Python, resulting in a 60% reduction in data gathering time. 
                            </li>
                        </ul>
                        </a>
                    )}
                    {selectedItem === 'item3' && (
                        <a className='list-group-item list-group-item-action active' href='#'>
                        <h4 id="list-item-3">
                            <div id ="section_title" style={{opacity: "0%"}}>PLACEHOLDER</div>
                            <span>SWE Intern</span> @ <span style = {{color: "var(--cl-accent)"}}>Viettel Solutions Corporation</span>
                        </h4>
                        <p><small>May - August 2022</small></p>
                        <ul className="exp__list">
                            <li>
                            Developed a prototype for a city demographics database management system to be used by the Ministry of Justice.
                            </li>
                            <li>
                            Created the front-end design for user settings, activity logs, and login functions utilized by 200 government employees. Handled cross-browser compatibility bugs.
                            </li>
                        </ul>
                        </a>
                    )}
                    {selectedItem === 'item4' && (
                        <a className='list-group-item list-group-item-action active' href='#'>
                        <h4 id="list-item-4">
                            <div id ="section_title" style={{opacity: "0%"}}>PLACEHOLDER</div>
                            <span>Computer Science Mentor </span>  <span style = {{color: "var(--cl-accent)"}}></span>
                        </h4>
                        <p><small>May 2022 - Present</small></p>
                        <ul className="exp__list">
                            <li>
                            Adopted Girls Who Codes’ online resources to develop a three-week Web Development beginner course for Vietnamese middle-schoolers. Facilitated one course for 34 students in July 2022.
                            </li>
                            <li>
                            Successfully pitched curriculum to administrators to create first-of-its-kind club, now offered as an after-school elective at Thang Long middle school.
                            </li>
                        </ul>
                        </a>
                    )}

                </div>
                
            </div>
                
        </div>

        <div class="row mt-4 " >
                <div class="col-4"></div>
                <a id = "call-action" href={resume} target="_blank">view my resume <ArrowForwardIcon/></a>
                
            </div>
        </div>
        
        
    </div>
  )
  
}

export default Exp