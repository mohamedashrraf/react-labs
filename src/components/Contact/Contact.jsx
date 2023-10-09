import React from 'react'
import style from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className='contact pb-3'>
      <section className={`${style.invite} p-5`}>
      <h2 className={`${style.yellow} text-center mb-5`}>
            Invite Someone Special
        </h2>
                <div className="container">
          <div className={`row`}>
            <div className={`col-sm-6 `}>
              <input
                type="text"
                name="guestName"
                placeholder="Guest Name"
                className={`w-100 ${style.inputs}`}
              />
            </div>
            <div className={`col-sm-6`}>
              <input
                type="text"
                name="guestEmail"
                placeholder="Guest Email Address"
                className={`w-100 ${style.inputs}`}
              />
            </div>
          </div>
          <div className={`row mt-3`}>
            <div className={`col-sm-6`}>
              <input
                type="text"
                name="guestMobile"
                placeholder="Guest Mobile Number"
                className={`w-100 ${style.inputs}`}
              />
            </div>
            <div className={`col-sm-6 `}>
              <select name="" id="" className={` ${style.select}`}>
                <option value="TP">Ticket Plan</option>
                <option value="SE">Single Entry</option>
                <option value="CoupleE">Couple Entry</option>
                <option value="CombineE">Combine Entry</option>
              </select>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center mt-5">
            <button className={` ${style.contactBtn} btn btn-warning rounded-pill`}>Send invitation</button>
          </div>
          </div>
        </div>
      </section>
      
       <section className={`${style.newsLetter} `}>
        <h2 className={`${style.yellow} text-center mb-5 pt-5`}>
          Signup For Newsletter
        </h2>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6 position-relative">
              <input
                type="text"
                name="Email"
                placeholder="Your Email Address Here"
                className={`w-100 ${style.inputs} rounded-pill py-1 `}
              />
              <button className={`${style.subBtn} btn btn-warning rounded-pill text-center`}>
                  Subscribe
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-6">
              <h3 className="text-white text-center">Get Update</h3>
              
              <div className="mt-3 d-flex justify-content-center mb-3">
                <button className={`${style.icons} me-2`}>
                  <a href="http://facebook.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${style.icons} me-2`}>
                  <a href="http://twitter.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${style.icons} me-2`}>
                  {" "}
                  <a href="http://youtube.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${style.icons}`}>
                  <a href="http://linkedin.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    )
}
