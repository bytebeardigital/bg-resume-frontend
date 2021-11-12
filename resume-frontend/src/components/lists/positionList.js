import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

function PositionList() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const positions = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/positions");
            setPositions(response.data);
        };
        positions();
    }, []);

    const positionCards = positions.slice(0,4).map((position) => {
        return <div className="position__card" key={position._id}>
            <p className="position__card--dateRange">{position.start_data} - {position.end_date}</p>
            <h4 className="position__card--title">{position.position_title}</h4>
            <p className="position__card--company">{position.company} | {position.location}</p>
            <p className="position__card--summary">{position.desc}</p>
        </div>
    }

    );

    return (
        <>
            {positionCards}
        </>
    )
}

export default PositionList;