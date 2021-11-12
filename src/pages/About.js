import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import HeadingBlock from "../components/layouts/miniHeader";
import axios from "axios";
import Instagram from "../components/socials/instagram.component.js";
import ProjectCard from "../components/cards/projectCard.js";

import SocialBar from "../components/socials/socialBar.component.js";

const API_KEY = process.env.REACT_APP_IG_TOKEN;
function About() {
    const [profile, setProfile] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const profile = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/users");
            setProfile(response.data);
        };
        const projects = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/projects");
            setProjects(response.data);
        };
        
        projects();
        profile();
        
    }, []);

    
    
    const getSummary = profile.map((profile) => {
        return profile.summary;
    })


    const getProjects = projects
        .sort((a,b) => (a.order > b.order) ? 1 : -1)
        .slice(0,2)
        .map((project) => {
        
        //handle categories
        const handleCats = project.category.map((category) => {
            return <li key={category} className="nav-link cat">{category}</li>
        })


        return <ProjectCard 
                    size={6}
                    key={project._id} 
                    data={project}
                    mobileSize={12}/>
    });

    return (
        <div>
            <Container className="about__page">
                <Row>
                    <Col lg={7} className="about">
                        <HeadingBlock headingTitle="about me"/>
                <p className="aboutme">{getSummary}</p>
                    </Col>
                    <Col lg={5} className="justify-content-center">
            <HeadingBlock headingTitle="Latest Social Media Posts"/>
                     <Instagram token={API_KEY} limit={1}/>
                    <SocialBar color="dark" />
            </Col>
                </Row>
                <Row style={{ padding: "50px 0 50px 0"}}>
                  <HeadingBlock headingTitle="See My Latest"/>
                    {getProjects}
                </Row>
            </Container>
        </div>
    )
}

export default About
