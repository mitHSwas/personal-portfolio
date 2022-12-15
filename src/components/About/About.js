import React from 'react';
import AboutImg from '../../assets/images/About.png';
import Resume from "../../assets/FinalResume(mithunbiswas).pdf"

const About = () => {
    return (
        <section id="about" className='container mx-auto mt-20 px-5'>
            <h1 className='text-4xl font-bold text-center mt-12'>About  <span className='text-primary'>Me</span></h1>
            <div className='lg:flex'>
                <div className='sm:w-2/3 md:mx-auto lg:w-1/3 mt-6'>
                    <img src={AboutImg} alt="" />
                </div>
                <div className='lg:w-2/3 sm:w-full mt-6 pl-5'>
                    <p> Hello! I'm Mithun, a programmer with a good level of expertise in Front-End Web Development. I'm currently studying at Barishal University pursuing B.B.A (Bachelor of Business Administration) major in marketing. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.</p>
                    <br />
                    <p>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.</p>
                    <br />
                    <a className="button" href={Resume} download="Resume.pdf">
                        <button className="btn btn-sm btn-outline btn-primary mr-4">Download Resume</button>
                    </a>
                    <a href="https://github.com/mitHSwas" target="_blank">
                        <button className="btn btn-sm btn-active btn-primary">GitHub</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;