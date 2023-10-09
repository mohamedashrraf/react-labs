import React from 'react'
import homeImg from '../../images/home.png';
import style from "./Home.module.css";
const images = require.context('../../images', false, /\.(png|jpeg|svg)$/);


export default function Home() {
  return (
    <div className={`${style.home}`}>
    <div className={`container`} >
      <div className='row d-flex justify-content-evenly align-items-center'>
        <div className='col-md-6'>
          <img src={homeImg} className='' alt="" />
          </div>
          
        <div className='col-md-6'>
          <h6 className={`${style.whiteCol}`}>31th octobar 2018</h6>
          <h1 className={`text-warning`}>Halloween Party</h1>
          <p className={`${style.whiteCol}`}>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
            <button className={`btn btn-warning rounded-pill ${style.homeBtn}`}>Explore More</button>
        </div>
      </div>
      </div>
      </div>
  )
}
