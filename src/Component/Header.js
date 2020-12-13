import React, { Component } from 'react'
import Deadpooltitle from './images/Deadpooltitle.jpg'
class Header extends Component {
    render() {
        return (

            <div className="App">
                <img className="headimg" src={Deadpooltitle}alt="Deadpool logo" />
                <div className="navtitle">
              
            </div>
           <nav className="navbar">
              <ul className="navul">
                
                    <li className="navli"><a href="!#">Home</a></li>
                    <li className="navli"><a href="!#">About</a></li>
                <li><p>Yeah! SuperHero</p></li>
              </ul> 
           </nav>
           </div>
        )
    }
}


export default Header
