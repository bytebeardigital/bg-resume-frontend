import React from 'react'


function SocialBar({color}) {
    const facebook = <a href="https://www.facebook.com/" className="social-link"><i className={`fab fa-facebook-f nav-link ${color}`}></i></a>
const instagram = <a href="https://www.instagram.com/bytebearbree/" className="social-link"><i className={`fab fa-instagram nav-link ${color}`}></i></a>
const github = <a href="https://github.com/bytebeardigital" className="social-link"><i className={`fab fa-github-alt nav-link ${color}`}></i></a>
const youtube = <a href="https://www.youtube.com/channel/UC-n4GL7z-q6tI9vGa81R19Q" className="social-link"><i className={`fab fa-youtube nav-link ${color}`}></i></a>
const linkedin = <a href="https://www.linkedin.com/in/bryannagardner/" className="social-link"><i className={`fab fa-linkedin-in nav-link ${color}`}></i></a>

    return (
        <div className="nav socialbar">
                {linkedin}
                {facebook}
                {instagram}
                {github}
                {youtube}
        </div>
    )
}

export default SocialBar;
