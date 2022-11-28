import "./Home.css"

import {Link} from "react-router-dom"

function Home(){
    return(
        <div className='home-container'>
            <h1 className="home">This is the Home page...</h1>

            <Link to="/about">About</Link><br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home;