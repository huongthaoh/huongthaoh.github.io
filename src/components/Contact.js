import React from 'react'
import "./Contact.css"

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for your message, I will get back to you soon!");
    }
    
  return (
    <div id = "contactSection">
        <div class="container-sm">
            <div id = "section_title" class="col-4">Contact</div>
            <div className='contact--Form'>
            <form id = "contactForm" onSubmit={handleSubmit} class = "row g-3 justify-content-center" action="https://formsubmit.co/hoanghuongthao03@gmail.com" method="POST">
                <input type="text" name="_honey" style={{display: "none"}} />
                <input type="hidden" name="_captcha" value = "false"/>
                <input type="hidden" name="_next" value="http://localhost:3000" />

                <div className="home-formSectionDouble">
                <div className="home-formSection">
                    <label for="inputName">Name</label>
                    <input type="text" class = "form-control" name="name" id = "inputName"/>
                </div>

                <div className="home-formSection">
                    <label for="inputEmail">Email address</label>
                    <input type="email" required class = "form-control" name="email" id = "inputEmail"/>  
                </div>
                
            </div>

            <div className="home-formSection">
                <label for="inputMessage">Message</label>
                <textarea rows="5" required class = "form-control" name="message" id = "inputMessage" />  
            </div>
            
            <div className="home-formSection">
            <button type="submit" className = "formBtn">Submit</button>
            </div>
                
            </form>
            </div>
            
        </div>
    </div>

  )
  
}

export default Contact