import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import HeadingBlock from "../components/layouts/miniHeader";
import PositionList from "../components/lists/positionList";
import EduList from "../components/lists/eduList";
import axios from "axios";
import LinkCard from "../components/cards/linkCard";
import ToolKit from "../components/cards/toolkitCard";
import ProgressBars from '../components/skills/progressBars.component';
import ProgressGraph from '../components/skills/progressGraph.component';

function Resume(props) {
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        const skills = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/skills");
            setSkills(response.data);
        };
        
        skills();
        
    }, []);

    //sortDesignSkills
    const designSkills = skills
        .filter((skill) => skill.type === 'Design')
        .map((skill) => { return skill })

    
    //sort Code Skills
    const codeSkills = skills
        .filter((skill) => skill.type === 'Coding')
        .map((skill) => { return skill  })


    return (

            <Container>
                <Row>
                    <Col lg={5} xs={12}>
                    <section className="section-block">
                         <HeadingBlock headingTitle="Work History"/>
                <PositionList/>
                    </section>

                     <section className="section-block">
                        <HeadingBlock headingTitle="Education"/>
                       <EduList/>
                    </section>
                    </Col>
                    <Col lg={7} xs={12}>
                          <section className="skill section-block">
                         <HeadingBlock headingTitle="Skills"/>
                         <ProgressGraph skills={designSkills} type="code"/>
                         <ProgressBars data={codeSkills}/>
                    </section>

                        <section className="special-container section-block">
                         <LinkCard/>
                         </section>

                           <section className="section-block">
                         <HeadingBlock headingTitle="ToolKit"/>
                         <ToolKit/>
                    </section>

                    </Col>
                </Row>
            </Container>
    )
}

export default Resume
