import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../../utils';
import { Link } from '@reach/router';

const Who = () => {
  return (
    <div className='relative'>
      <div className='who-light'>
        <div className='flash-light'></div>
        <img className='who-planet' src="/images/banner/planet.png" alt=""></img>
      </div>
      <img className='who-line sm:!w-[100px]' src="/images/banner/line1.png" alt=""></img>
      <div className='who-star-group'>
        <img className='star1' src="./images/banner/star.png" alt="" />
        <img className='star2' src="./images/banner/star.png" alt="" />
        <img className='star3' src="./images/banner/star.png" alt="" />
        <img className='star4' src="./images/banner/meteor2.png" alt="" />
      </div>
      <div className="container">
        <div className='who'>
          <div className="items-center md:py-[50px]">
            <Reveal className='onStep' delay={200} duration={600} triggerOnce>
                <h3 className="text-[50px] md:text-[40px] font-semibold text-white text-center">Services</h3>
            </Reveal>
            <Reveal keyframes={fadeInUp} className='onStep py-10' delay={400} duration={1000} triggerOnce>
              <div className='row'>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/smartphone.png"
                        alt='smartphone'
                        className='m-auto w-[65px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-3'>
                      <span className='app-color font-semibold text-[28px]' >Mobile Device Management</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3'>
                        Remote workforce? BYOD operations? Ensure every device is configured and managed correctly to maintain control and aid in compliance.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/neural.png"
                        alt='neural'
                        className='m-auto w-[70px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-3'>
                      <span className='app-color font-semibold text-[28px]'>Networking & Telecom</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3' >
                        Wireless, infrastructure, voice/phone, and more… Get your communication and infrastructure operating securely and poised to drive efficiency.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/19680_excel_microsoft_icon.png"
                        alt='19680_excel_microsoft_icon'
                        className='m-auto w-[70px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-2'>
                      <span className='app-color font-semibold text-[28px]'>Microsoft Managed Services</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3' >
                      Trust the Microsoft Solutions Partner team. SharePoint, Office365, CoPilot AI, BI, Azure, and everything in between.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3 pt-1'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/consulting.png"
                        alt='consulting'
                        className='m-auto w-[65px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-3'>
                      <span className='app-color font-semibold text-[28px]' >IT Consulting & Strategy</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3'>
                        Enhance IT operations by supporting businesses in navigating tech changes and adopting new tech. Ensure tech investments deliver value, helping your business stay competitive.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3 pt-1'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/clouds.png"
                        alt='clouds'
                        className='m-auto w-[65px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-3'>
                      <span className='app-color font-semibold text-[28px]'>Managed Cloud Services</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3' >
                        AWS, Azure or hybrid, cloud management is complex – from configurations to access management to maximizing usage and investment, we work to make it a reality.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1/3 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-[90%] sm:m-auto mb-3 pt-1'>
                  <div className='app-card'>
                    <div>
                      <img
                        loading="lazy"
                        src="/images/mobile/support_13448076.png"
                        alt='support'
                        className='m-auto w-[63px] pt-2'
                      />
                    </div>
                    <div className='app-card-header text-center pt-2'>
                      <span className='app-color font-semibold text-[28px]'>IT Support & Helpdesk</span>
                    </div>
                    <div className='app-card-body my-1'>
                      <p className='text-[18px] text-center pt-3' >
                        Need a deep bench of experts 24/7? From system admins to friendly help desk staff you will know by name…get this and more from your ISOutsource team.
                      </p>
                    </div>
                    <div className='py-7 mb-4'>
                      <div className='mainside flex m-auto'>
                        <Link to="/">LEARN MORE</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
           
          </div>
        </div>
      </div>
    </div>
  )
};
export default Who;