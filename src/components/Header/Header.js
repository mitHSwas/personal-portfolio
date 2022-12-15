import React from 'react';
import Resume from '../../assets/FinalResume(mithunbiswas).pdf';

const Header = () => {
    return (
        <div id="header" className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#home' className='btn-sm mr-2'>Home</a></li>
                            <li><a href='#about' className='btn-sm mr-2'>About</a></li>
                            <li><a href='#portfolio' className='btn-sm mr-2'>Portfolio</a></li>
                            <li><a href='#skills' className='btn-sm mr-2'>Skills</a></li>
                            <li><a href='#contract' className='btn-sm mr-2'>Contract</a></li>
                            <a className="btn btn-primary btn-outline btn-sm" href={Resume} download="Resume.pdf">Download Resume</a>
                        </ul>
                    </div>
                    <a href='#header' className="btn btn-ghost normal-case text-xl">MITHUN</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a href='#home' className='btn-sm mr-2'>Home</a></li>
                        <li><a href='#about' className='btn-sm mr-2'>About</a></li>
                        <li><a href='#portfolio' className='btn-sm mr-2'>Portfolio</a></li>
                        <li><a href='#skills' className='btn-sm mr-2'>Skills</a></li>
                        <li><a href='#contract' className='btn-sm mr-2'>Contract</a></li>
                        <a className="btn btn-primary btn-outline btn-sm" href={Resume} download="Resume.pdf">Download Resume</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;