import React from 'react';
import { Card } from "react-bootstrap";


const ProjectCard = ({data, size, mobileSize}) => {

            let cats = data.category;
            let catClass = cats.join(" ")
            let filterClass = `filter-item ${catClass}`;

return(
        <div className={`col-${mobileSize} col-lg-${size} projectCard__wrapper ${filterClass}`} >
            <div className="projectCard__inner">
            <a href={data.link} alt={data.title} className="projectCard__link">
        <img src={data.image} alt={data.title} className="img-fluid projectCard__image" />
            <Card className="projectCard__card">
                <Card.Body className="projectCard__card--meta">
                    <h5 className="projectCard__card--title">{data.title}</h5>
                    <ul className="nav">
                        {data.category.map((category) => {
                return <li key={category} className="cat">{category}</li>
            })}
                    </ul>
                </Card.Body>
            </Card>
        </a>
            </div>
        </div>
    )
}


export default ProjectCard;