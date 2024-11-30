import React, { useState } from "react";
import Reveal from 'react-awesome-reveal';
// import axios from "axios";

const Contact = () => {

    const [userinfo, setUserinfo] = useState({
        name: "", email:"", subject:"", content:""
    });

    const onChange = e => {
        setUserinfo({
            ...userinfo,
            [e.target.id]: e.target.value
        })
    }

    const sendMessage = async (e) => {
        await fetch('http://localhost:5000/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userinfo),
        }).then(res => {
            setUserinfo({
                ...userinfo,
                name: "", email: "", content:"", subject:""
            });
            return res.josn();
        });
    };

    return (
        <div>
            <Reveal className='onStep pt-5' delay={200} duration={600} triggerOnce>
                <h3 className="text-[50px] md:text-[40px] font-semibold text-white text-center">Contact Us</h3>
            </Reveal>
            <div className="lg:w-[900px] md:w-[600px] sm:w-[95%] sm:px-5 py-5 container m-auto">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" onChange={onChange} value={userinfo.name} id="name" className="text-white form-control bg-transparent border-[#404143] focus:outline-none focus:border-[#404143] focus:shadow-none" placeholder="Your Name" />
                            <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="md:pt-4 col-md-6">
                        <div className="form-floating">
                            <input type="email" onChange={onChange} value={userinfo.email} id="email" className="text-white form-control bg-transparent border-[#404143] focus:outline-none focus:border-[#404143] focus:shadow-none" placeholder="Your Email" />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-md-12 py-3 m-auto">
                        <div className="form-floating">
                            <input type="text" onChange={onChange} value={userinfo.subject} id="subject" className="text-white form-control bg-transparent border-[#404143] focus:outline-none focus:border-[#404143] focus:shadow-none" placeholder="Subject" />
                            <label htmlFor="text">Subject</label>
                        </div>
                    </div>
                    <div className="col-md-12 m-auto">
                        <div className="form-floating">
                            <textarea onChange={onChange} value={userinfo.content} id="content" className="form-control bg-transparent border-[#404143] focus:outline-none focus:border-[#404143] text-white focus:shadow-none" style={{minHeight: "150px"}} placeholder="Message"></textarea>
                            <label htmlFor="email">Message</label>
                        </div>
                    </div>
                    <div className="col-12 py-8 m-auto">
                    <button onClick={sendMessage} className=" bg-violet-500 rounded-3xl flex ml-auto py-[13px] px-4 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;