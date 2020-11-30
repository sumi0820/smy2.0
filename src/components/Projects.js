import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects__container">
            <Link className="projects__project">
                <img src="" alt=""/>
                <p>Title</p>
                <p>Tech</p>
                <p>Intro</p>
            </Link>
            <Link className="projects__project">
                <img src="" alt=""/>
                <p>Title</p>
                <p>Tech</p>
                <p>Intro</p>
            </Link>
            <Link className="projects__project">
                <img src="" alt=""/>
                <p>Title</p>
                <p>Tech</p>
                <p>Intro</p>
            </Link>
        </div>
    );
};

export default Projects;