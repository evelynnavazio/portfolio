import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollServices';
import './Profile.css'


function Profile() {
    return (
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://github.com/evelynnavazio" target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-github-square"/>
                  </a>
                  <a href="mailto:evelynnavazio@gmail.com?body=My custom mail body" target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-google-plus-square"/>
                  </a>
                  <a href="https://www.instagram.com/evenavaz/" target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/evelynnavazio/" target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                  {" "}
                  Hello, I'm <span className="highlighted-text">Eve</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1>
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Enthusiastic Dev 😎",
                        1000,
                        "Full stack Developer in progress 💻",
                        1000,
                        "React 🌐",
                        1000,
                        "I like learn new things 🤓",
                        1000,
                        "Cats lover 😍",
                        1000,
                      ]}
                    />
                  </h1>
                </span>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end operations.
                </span>
              </div>
    
              <div className="profile-options">
                <button className="btn-1 primary-btn-1"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                > Hire Me </button>
                <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                  <button className="btn-1 highlighted-btn-1">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      );
    }

export default Profile