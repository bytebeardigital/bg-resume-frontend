import React from 'react';
import mapImg from '../assets/images/map-placeholder.jpg';

const Contact = () => {
    return (
<div className="mapComponent">
    <div className="availablity-block">
            <h2>Availability</h2>
            <p className="availability-content">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut.Lorem ipsum dolor sit amet, in quodsi vulputate pro.</p>
    </div>
     <img src={mapImg} className="map img-fluid" alt="map-img"/>
</div>
            
    );
};

Contact.propTypes = {};

export default Contact;