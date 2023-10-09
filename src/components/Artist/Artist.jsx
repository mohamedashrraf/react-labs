import React from 'react'
import style from "./Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import artistImg from '../../images/artist.png';


export default function Artist() {
  return (
    <div className={`${style.artist}`}>
      <div className='container text-center'>
              <div className='row '>
          <div className='col-md-12'>
            <h1 className={`text-warning`}>Our Halloween's Artist</h1>
          </div>
              </div>
        
      <div className='row d-flex align-items-center'>
           <div className="col-md-6 col-sm-12">
            <div className={`d-flex align-items-center `}>
              <div className="col-6 overflow-hidden d-flex justify-content-center align-items-self">
                <img src={artistImg} className={`${style.image}`} />
              </div>
              <div className="col-6 overflow-hidden">
                <span className="text-white fs-3">DJ Remerson Huke</span>
                <span className="text-white fs-5">Lead DJ On Deadpoll</span>
                <p className="text-white fs-6 mt-4">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                </p>
                <div>
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
            <div className="col-md-6 col-sm-12">
            <div className={`d-flex align-items-center `}>
              <div className="col-6 overflow-hidden d-flex justify-content-center align-items-self">
                <img src={artistImg} className={`${style.image}`} />
              </div>
              <div className="col-6 overflow-hidden">
                <span className="text-white fs-3">DJ Remerson Huke</span>
                <span className="text-white fs-5">Lead DJ On Deadpoll</span>
                <p className="text-white fs-6 mt-4">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore.
                </p>
                <div>
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
        </div>
      </div>
    </div>
  )
}
