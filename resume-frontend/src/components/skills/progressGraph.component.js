import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {Row, Col} from "react-bootstrap";
import AnimatedProgressProvider from  "./SkillsProvider";

//animation
import { easeQuadInOut } from 'd3-ease';

function ProgressGraph({skills}) {
    const skillCircle = skills.map((skill) => {
        return(
            <Col xs={4} lg={3} key={skill._id}>
                <div className="skill__circle">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={skill.percentage}
                        duration={2}
                        easingFunction={ easeQuadInOut }>
                        {(value) => {
                            const roundedValue = Math.round(skill.percentage);
                            return (
                                <CircularProgressbarWithChildren
                                    
                                    value={value}
                                    strokeWidth={4}
                                    styles={
                                        buildStyles({
                                            textColor: "#4A4E69",
                                            trailColor: '#d6d6d6',
                                            pathColor: "#C9ADA7",
                                            pathTransitionDuration: 0.25, 
                                        })
                                    }
                                >
                                   <p className="skill__circle--perc"> {`${roundedValue}%`}</p>
                                   <p className="skill__circle--name">{skill.skill_name}</p>
                                </CircularProgressbarWithChildren>
                            )
                        }}
                    </AnimatedProgressProvider>
                </div>
            </Col>
        )
    });



    return(
        <Row className="skill__circle--wrap">
            {skillCircle}
        </Row>
    );
}

export default ProgressGraph;