import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(project => setProjects(project))
    })
    return (
        <section id="portfolio" className='container mx-auto mt-20'>
            <h1 className='text-4xl font-bold text-center mt-12'>My Latest  <span className='text-primary'>Projects</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {projects &&
                    projects.map((project, index) => <ProjectCard key={index} project={project}></ProjectCard>)
                }
            </div>
        </section>
    );
};

export default Projects;