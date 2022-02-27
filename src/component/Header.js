import React from 'react'
import "./style.css"
// import {Link, Router,Route} from "react-router-dom";
// import { Profile } from './Profile';

export const Header = () => {
  return (
    <div className='header'>
    <div className='hamburger'><img src={require('./assets/hamburger.png')} alt=""/></div>
    <div className='icon'><img className='icon' src={require('./assets/icon.png')} alt=""/></div>
    <div>
    {/* <Router> */}
    {/* <Link to="/profile"> */}
    <img className='profile' src={require('./assets/profile.png')} alt=""/>
    {/* </Link> */}
    {/* <switch>
    <Route path="/profile">
            <Profile />
            </Route>
    </switch>
    </Router> */}
    </div>
        
        
    </div>
  )
}
