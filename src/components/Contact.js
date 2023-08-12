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

                <div class = "col-md-4">
                    <label for="inputName">Your Name</label>
                    <input type="text" class = "form-control" name="name" id = "inputName"/>    
                </div>
                <div class = "col-md-6">
                    <label for="inputEmail">Your email address</label>
                    <input type="email" required class = "form-control" name="email" id = "inputEmail"/>  
                </div>
                <div class = "col-md-10">
                    <label for="inputMessage">Your message</label>
                    <textarea rows="5" required class = "form-control" name="message" id = "inputMessage" />  
                </div>
                <div class="w-100"></div>
                <div class = "col-10">
                    <button type="submit" className = "formBtn">Submit</button>
                </div>

                
            </form>
            </div>
            
        </div>
    </div>

  )
  
}

export default Contact