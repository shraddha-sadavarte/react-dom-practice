import "./About.css"

import {Link} from "react-router-dom"

function About(){
    return(
        <div className='about-container'>
            <h1 className="about">This is the About page...</h1>
        

            <Link to="/">Home</Link><br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default About;