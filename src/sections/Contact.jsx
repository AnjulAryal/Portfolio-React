import React from 'react'
import icon from "../assets/icon-contact.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { PiGithubLogoFill } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ap71pk8',   // replace with your actual Service ID
                'template_wqoyg5v',  // replace with your actual Template ID
                form.current,
                'Lg0jW3l9zxq51fI-L'    // replace with your actual Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("❌ Failed to send message. Please try again.");
                }
            );
    };
    return (
        <section className="contact bg-gradient-to-r from-slate-900 to-gray-800  text-white p-4 flex flex-col gap-3 sm:p-20 ">
            <h1 className='text-center font-bold text-cyan-500 text-4xl flex gap-2 justify-center items-center'> Contact Us</h1>
            <div className='flex  flex-col sm:flex-row justify-around  gap-10 sm:pt-20 items-center sm:items-start'>
                <div className="left flex flex-col sm:gap-10  p-4 gap-5 sm:pt-20  ">
                    <h3 className='font-bold sm:text-2xl lg:text-3xl '>Contact Information</h3>
                    <div className='flex flex-col gap-5'>
                        <div className="email flex  gap-1 items-center">
                            <FontAwesomeIcon icon={faEnvelope} className='text-cyan-400 mr-2' />
                            <span className='lg:text-2xl'>aryalanjul123@gmail.com</span>
                        </div>
                        <div className="phone flex  gap-1 items-center">
                            <FontAwesomeIcon icon={faPhone} className='text-cyan-400 mr-2' />
                            <span className='lg:text-2xl'>+977 98XXXXXXX</span>
                        </div>
                        <div className="location flex  gap-1 items-center">
                            <FontAwesomeIcon icon={faLocationDot} className='text-cyan-400 mr-2' />
                            <span className='lg:text-xl'>Naxal,Kathmandu</span>
                        </div>
                    </div>
                    <div className="social-media flex flex-col gap-4 ">
                        <div className='flex '>
                            <a href="https://www.facebook.com/anjul.aryal.2025">
                                <FaFacebook className='text-white cursor-pointer w-10 h-5 hover:w-15 hover:h-10 transition-all duration-700 ease-in-out hover:text-cyan-300' />
                            </a>
                            <a href="https://www.instagram.com/anzool_aryal/">
                                <CiInstagram className='text-white cursor-pointer w-10 h-5 hover:w-15 hover:h-10 transition-all duration-700 ease-in-out hover:text-cyan-300' />
                            </a>
                            <a href="https://github.com/AnjulAryal">
                                <PiGithubLogoFill className='text-white cursor-pointer w-10 h-5 hover:w-15 hover:h-10 transition-all duration-700 ease-in-out hover:text-cyan-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/anjul-aryal-7125ab302/">
                                <AiFillLinkedin className='text-white cursor-pointer w-10 h-5 hover:w-15 hover:h-10 transition-all duration-700 ease-in-out hover:text-cyan-300' />
                            </a>

                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='text-white flex flex-col gap-4 w-full max-w-md p-8 bg-slate-500 rounded-sm'>
                    <h3 className='font-bold text-cyan-100'>Send me a message:</h3>

                    <label>Full Name:</label>
                    <input name="from_name" type="text" className="bg-cyan-50 text-black p-2 rounded" required />

                    <label>Email:</label>
                    <input name="from_email" type="email" className="bg-cyan-50 text-black p-2 rounded" required />

                    <label>Phone Number:</label>
                    <input name="from_phone" type="tel" className="bg-cyan-50 text-black p-2 rounded" />

                    <label>Message:</label>
                    <textarea name="message" className="bg-cyan-50 text-black p-2 rounded h-20" required></textarea>

                    <div className='flex justify-center'>
                        <button type="submit" className='bg-slate-700 p-2 w-[100px] rounded-lg cursor-pointer hover:text-cyan-400 transition-all duration-500 ease-out'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
