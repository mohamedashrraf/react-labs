import React from 'react'
import style from "./About.module.css";
import aboutImg from '../../images/about.jpeg';


export default function About() {
  return (
    <div className={`${style.about}`}>
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className={`text-warning`}>About The Party</h1>
          <p className={`${style.whiteCol} p-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          <p className={`${style.whiteCol} p-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <button className={` ${style.aboutBtn} btn btn-warning rounded-pill`}>Know More</button>
          </div>
        </div>
        
        </div>
    </div>
  )
}
