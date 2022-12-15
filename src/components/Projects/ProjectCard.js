import React from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const { name, img, description, gitHub, liveSite } = project;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-2xl mx-auto">
            <figure className="px-3 pt-3">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <a href={gitHub} target="_blank">
                        <button className="btn btn-sm btn-outline btn-primary"><FaGithub className='mr-1'></FaGithub> GitHub</button>
                    </a>
                    <a href={liveSite} target="_blank">
                        <button className="btn btn-primary btn-sm"><FaEye className="mr-1"></FaEye> Live Site</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;