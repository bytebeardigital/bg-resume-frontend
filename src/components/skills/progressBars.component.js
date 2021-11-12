import React from 'react';
import { Row } from 'react-bootstrap';

function ProgressBars({data}) {
    const skills = data;


    const skillsCards = skills.map((skill) => {
            //styles
    const fillerStyles = {
        height: '100%',
        width: `${skill.percentage}%`,
        backgroundColor: '#C9ADA7',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }
        return (
            <div className="skill__bar">
                <div className="skill__bar--label">
                    <p className="skill__bar--label__points">{`${skill.percentage} %`}</p>
                    <p className="skill__bar--label__name">{skill.skill_name}</p>
                </div>
                <div className="skill__bar--barwrap">
                    <div style={fillerStyles} />
                </div>
            </div>
        )
    });

    //render data
        return ( 
        
        <Row className="progressBar">
            {skillsCards}
        </Row>

);
}



export default ProgressBars;