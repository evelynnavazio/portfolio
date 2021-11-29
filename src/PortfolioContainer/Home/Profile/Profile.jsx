import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faGooglePlusSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'
import './Profile.css'


function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'></div>
                        <a  href='https://www.instagram.com/?hl=es'>
                        <FontAwesomeIcon className='colz-icon-1' icon={faLinkedin}/>
                        </a>
                        <a className='colz-icon-1' href='/#'>
                        <FontAwesomeIcon icon={faGooglePlusSquare}/>
                        </a>
                        <a href='/#'>
                            <FontAwesomeIcon icon={faInstagramSquare}/>
                        </a>
                        <a href='/#'>
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                        </a>

                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text-1'>
                            {" "}
                            Hello, I' am <span className='high-lighted-text'>Eve</span>
                        </span>
                        <div className='profile-details-role'>
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic dev ❤️", 1000,
                                    "Full stack developer ✨", 1000,
                                    "React dev ✔️", 1000,
                                    "Cats lover 😻", 1000,
                                ]}
                                />
                            </h1>
                        </div> 
                        <span className='profile-role-tagline'>
                        knack of building applications with front and back end operations.
                        </span>
                        <div className='profile-options-1'>
                            <button className='primary-btn-1 btn-1'>
                                    {" "}
                                    Hire Me {" "}
                            </button>
                            <a href='ehizcv.pdf'>
                            <button className='highlighted-btn-1 btn-1' download='Ehiedu ehizcv.pf'>Get resume</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
)}

export default Profile