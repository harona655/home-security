import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../../utils';

const Team = () => {
  return (
    <div className='relative pt-1'>
      <div className='team-light'>
        <div className='flash-light'></div>
        <img className='line' src="/images/banner/line1.png" alt=""></img>
      </div>
      <div className='team-star-group'>
        <img className='star1' src="./images/banner/star.png" alt="" />
        <img className='star2' src="./images/banner/star.png" alt="" />
        <img className='star3' src="./images/banner/star.png" alt="" />
        <img className='star4' src="./images/banner/small-star.png" alt="" />
        <img className='star5' src="./images/banner/small-star.png" alt="" />
        <img className='star6' src="./images/banner/small-star.png" alt="" />
        <img className='planet' src="./images/banner/planet2.png" alt="" />
      </div>
      <div className="container">
        <div className='team mt-[70px] sm:mt-[0px]'>
          <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
            <h3 className="text-[50px] md:text-[40px] font-semibold text-white text-center">Our Team</h3>
          </Reveal>
          <div className="team-members row my-5 justify-center sm:px-5">
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
            <Reveal className='onStep w-1/4 lg:w-1/3 md:w-1/2' keyframes={fadeInUp} delay={400} duration={800} triggerOnce>
              <div className='member'>
                <div className='relative'>
                  <img className='md:mx-auto' src="/images/team/kevin.png" alt="CEO"></img>
                </div>
                <span className='w-full inline-block member-name mt-3 xsm:!text-[14px] text-center'>Kevin Wolfe</span>
                <h1 className='text-[15px] xsm:text-[11px] my-2 text-center'>Chief Executive Officer</h1>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Team;