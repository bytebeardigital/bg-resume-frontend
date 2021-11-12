import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeadingBlock from "../layouts/miniHeader";

function LinkCard() {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        const socials = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/users");
            setSocials(response.data);
            
        };
        socials();
        
    }, []);
    
    const socialCards = socials.map((social) => {
        const socialLinks = social.links;
        return socialLinks.map((link) => {
            return (
                <div className="linkcard col-lg-6 col-xs-12" key={link._id}>
                   <HeadingBlock headingTitle={link.title}/>
                    <p className="linkcard__content">{link.cta_summary}</p>
                    <button className="bttn">
                        <a href={link.link} alt="donwload cv">{link.cta_text}</a>
                    </button>
                </div>
            )
        })
    });

    return (
        <div className="row">
            {socialCards}
        </div>
    )
}

export default LinkCard;