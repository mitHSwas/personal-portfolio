import React from 'react';
import Profile from '../../assets/images/profile.png';
import Resume from '../../assets/FinalResume(mithunbiswas).pdf';
const TopSection = () => {
    return (
        <section id='home' className='container mx-auto mt-8 px-5'>
            <div className='lg:flex'>
                <div className='lg:w-1/2 sm:w-full mt-6'>
                    <h3 className='text-2xl font-semibold mt-5'>Hi, I am</h3>
                    <h1 className='text-5xl font-bold text-primary my-5'>MITHUN BISWAS</h1>
                    <h2 className='text-3xl font-semibold mb-4'>I am a Web Developer</h2>
                    <a href="#contract">
                        <button className="btn btn-sm btn-active btn-primary mr-4">Hire me</button>
                    </a>
                    <a href={Resume} download="Resume.Pdf" className="btn btn-sm btn-outline btn-primary">Download Resume</a>
                </div>
                <div className='sm:w-2/3 lg:w-1/3 mx-auto mt-6'>
                    <img src={Profile} alt="" />
                </div>
            </div>
        </section>
    );
};

export default TopSection;