import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUp, fadeIn } from '../../utils';

const Banner = () => {
  return (
    <div className='relative pt-5'>
      <div className='banner-light md:hidden'>
        <div className='flash-light'></div>
        <img className='banner-planet' src="/images/banner/planet.png" alt=""></img>
      </div>
      <div className='token-light'>
        <div className='flash-light'></div>
      </div>
      <div className='token-star-group'>
        <img className='star1' src="./images/banner/star.png" alt="" />
        <img className='star2' src="./images/banner/star.png" alt="" />
        <img className='star3' src="./images/banner/star.png" alt="" />
        <img className='star4' src="./images/banner/small-star.png" alt="" />
        <img className='star5' src="./images/banner/small-star.png" alt="" />
        <img className='star6' src="./images/banner/small-star.png" alt="" />
        <img className='planet md:hidden' src="./images/banner/planet.png" alt="" />
        <img className='planet2' src="./images/banner/planet2.png" alt="" />
        <img className='line md:!w-[150px]' src="./images/banner/line1.png" alt="" />
      </div>
      <div className="container">
        <div className='banner'>
          <div className="row items-center py-[90px]">
            <div className="col-md-5">
              <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <h3 className="text-[48px] md:text-[45px] md:text-center font-semibold text-white"><span className="text-uppercase text-white">HOME SECURITY</span></h3>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
                <h1 className="text-[30px] md:text-[24px] md:text-center mt-3">InnovAuto Motors</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
                <h1 className="text-[20px] md:text-[16px] md:text-center text-white mt-3">
                  Our Services, titled "Enhancing Home Security: Strategies for a Safer Living Environment," aims to raise awareness about the importance of home security and provide practical solutions that can be easily implemented by homeowners.
                </h1>
              </Reveal>
              {/* <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
                <div className='mt-5 md:text-center'>
                  <a href="/docs.html" target="_blank" className="btn-main hover:text-white">Read Whitepaper</a>
                </div>
                <div className="mb-sm-30"></div>
              </Reveal> */}
            </div>
            <div className="col-md-7 relative">
              <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
                <img className="w-[85%] pl-20 md:pt-20" src="./images/main.png" alt="" />
              </Reveal>
            </div>
            <div className='col-md-12 relative'>
              <img className='mt-[120px] mx-auto' src="/images/banner/watermark1.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Banner;
