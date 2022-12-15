import React from 'react';
import { FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Contract = () => {
    return (
        <section id="contract" className='container mx-auto mt-20 px-5'>
            <h1 className='text-4xl font-bold text-center mt-12'>Get in <span className='text-primary'>Touch</span></h1>
            <div className='lg:flex md:flex flex-row-reverse'>
                <div className='mt-8 w-full lg:w-2/3'>
                    <form action="https://formsubmit.co/6b76c06778f8fd792be654b793dcca17" method="POST">
                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                            <div className="form-control w-full">
                                <label className="label mr-2">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-2">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" name="Email" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="Subject" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text">Message*</span>
                            </label>
                            <textarea name="Message" className="textarea textarea-bordered h-16" required></textarea>
                        </div>
                        <button className='btn btn-primary btn-outline mt-5' type="submit">Send Message</button>
                    </form>
                </div>
                <div className='mt-8 w-full lg:w-1/3'>
                    <div className="flex gap-5 mt-8">
                        <div>
                            <FaPhoneAlt className='text-4xl mt-4'></FaPhoneAlt>
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold'>Phone</h2>
                            <p>+8801849425215</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-8">
                        <div>
                            <MdEmail className='text-4xl mt-4'></MdEmail>
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold'>Email</h2>
                            <p>wdevmithunbiswas@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-8">
                        <div>
                            <MdLocationOn className='text-4xl mt-4'></MdLocationOn>
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold'>Location</h2>
                            <p>Boyra Bazar, Khulna</p>
                        </div>
                    </div>
                    <div className="flex text-3xl ml-16 gap-5 m-10">
                        <a href="https://www.linkedin.com/in/mithswas/" target="_blank"><FaLinkedin></FaLinkedin></a>
                        <a href="https://www.facebook.com/wDevMithunBiswas/" target="_blank"><FaFacebook></FaFacebook></a>
                        <a href="https://github.com/mitHSwas" target="_blank"><FaGithub></FaGithub></a>
                        <a href="https://www.instagram.com/mith_swas/" target="_blank"><FaInstagramSquare></FaInstagramSquare></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contract;