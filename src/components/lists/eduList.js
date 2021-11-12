import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EduList() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const schools = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/users");
            setSchools(response.data);
        };
        schools();
    }, []);

    const educationCards = schools.map((school) => {
        const educations = school.education;
        return (
            educations.map((education) => {
                return (
                    <section className="school__card" key={education._id}>
            <p className="school__card--dateRange">{education.attend} - {education.completed}</p>
            <h4 className="school__card--school">{education.school}</h4>
            <p className="school__card--degree">{education.degree}</p>
            </section>
                )
            })
            
        )
    }

    );

    return (
        <>
            {educationCards}
        </>
    )
}

export default EduList;