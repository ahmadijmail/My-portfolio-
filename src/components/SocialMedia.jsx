import React from 'react'

import {  FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/ahmadijmail/">
                    <FaLinkedin />
                </a>
            </div>
         
            <div>
                <a href="https://github.com/ahmadijmail">
                    <FaGithub />
                </a>
            </div>

        </div>
    )
}

export default SocialMedia