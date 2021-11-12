import React from 'react'
import SocialBar from "../socials/socialBar.component.js";

function Footer() {
    return(
            <footer className="text-center" style={{ padding: "50px"}}>
            <h2>Wanna reach out?</h2>
            <h1><a className="email" href="mailto:hello@bytebeardigital.com" alt="Email me" >hello@bytebeardigital.com</a></h1>
            <p className="mini">(That's my freelance business! <span className="moji">☝🏽</span> Check it out <a href="www.bytebeardigital.com"><span className="moji">🚀</span></a> )</p>
            <SocialBar color="light"/>
            </footer>
    )
}
export default Footer;