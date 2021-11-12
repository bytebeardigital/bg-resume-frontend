import React, {useState, useEffect} from 'react';
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import Isotope from "isotope-layout";
import ProjectCard from './../components/cards/projectCard';
import HeadingBlock from "../components/layouts/miniHeader";
 
function Portfolio() {
    const [projects, setProjects] = useState([]);
      // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*');
      // init one ref to store the future isotope object
    const isotope = React.useRef();
  

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey]);
  const handleFilterKeyChange = key => () => setFilterKey(key);

    //get projects
    useEffect(() => {
        const projects = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/projects");
            setProjects(response.data)
        };
        projects();
    }, []);

//getting projects
   const getProjects = projects.sort((a,b) => (a.order > b.order) ? 1 : -1).map((project) => {
        return <>
          <ProjectCard 
                    size={4}
                   key={project._id}
                   mobileSize={6}
                    data={project}/>
                    </>
    });
  

    return (
        <Container className="portfolio">
        <div className="section-block">
          <HeadingBlock classes="mt-5 text-center" headingTitle="Portfolio"/>
        <div className="nav portfolio__controls section-block">
          <button className="portfolio__controls-filter" onClick={handleFilterKeyChange('*')}>All</button>
          <button className="portfolio__controls-filter"  onClick={handleFilterKeyChange('development')}>Development</button>
          <button className="portfolio__controls-filter"  onClick={handleFilterKeyChange('ecommerce')}>eCommerce</button>
          <button className="portfolio__controls-filter"  onClick={handleFilterKeyChange('design')}>Design</button>
        </div>
        </div>
        
        <Row className="filter-container">
            {getProjects}
        </Row>

      </Container>
    )
}

export default Portfolio
