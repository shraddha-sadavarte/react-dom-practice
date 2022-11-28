import "./Contact.css"

import {Link} from "react-router-dom"

function Contact(){
    return(
        <div className='contact-container'>
            <h1 className="contact">This is the Contact page...</h1>

            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link>
        </div>
    )
}

export default Contact;