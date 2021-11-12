import React from 'react';

const QuickContact = () => {
    return (
                   <div className="QuickContact">
                       <h2 className="heading">Quick Contact</h2>
                       <div className="contactInfo">
                           <p>Phone: <a href={"tel:2482503816"}>(248) 250-3816</a></p>
                           <p>Email: <a href={"mailto:hello@bytebeardigital.com"}>hello@bytebeardigital.com</a></p>
                           <p>Location: Detroit, MI</p>
                       </div>
                   </div>
    );
};

QuickContact.propTypes = {};

export default QuickContact;