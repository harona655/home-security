import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../../utils';
import { Link } from '@reach/router';
import RebaseBar from '../../components/app/RebaseBar';

const Who = () => {
  return (
    <div className='relative'>
      
      <div className="container sm:p-0">
        <div className='who'>
          <div className="items-center py-[60px] sm:py-[0px]">
            <Reveal className='onStep' delay={200} duration={600} triggerOnce>
                <h3 className="text-[50px] md:text-[40px] font-semibold text-white text-center">Shop</h3>
            </Reveal>
            <Reveal keyframes={fadeInUp} className='onStep py-10' delay={400} duration={1000} triggerOnce>
              <div className='app-card mt-2 sm:w-[85%] sm:m-auto'>
                <div className='row'>
                  <div className='w-1/4 xl:w-1/3 md:w-1/2 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/security.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>Auto C-30-148</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$340.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 xl:w-1/3 md:w-1/2 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/alarm.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>Alarm System</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$56.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 xl:w-1/3 md:w-1/2 md:pt-4 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/dashcams.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>PRUVEEO </p>
                        <p className='app-color font-semibold text-[20px] text-center'>$155.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 xl:w-1/3 md:w-1/2 xl:pt-6 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/gis.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>GPS device</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$112.98</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 pt-4 xl:w-1/3 md:w-1/2 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/gps1.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>4G GPS</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$254.98</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 pt-4 xl:w-1/3 md:w-1/2 sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/stock.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>iStock</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$370.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 pt-4 xl:w-1/3 md:w-1/2 m-auto sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/thermostats.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>thermostats</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$50.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 pt-4 xl:w-1/3 md:w-1/2 m-auto sm:w-[98%] sm:m-auto sm:mb-4'>
                    <div className='app-sub2card flex flex-col justify-between'>
                      <RebaseBar image="/images/shop/car.jpg" />
                      <div className='mb-4 pt-3'>
                        <p className='text-white text-[26px] text-center'>Car light</p>
                        <p className='app-color font-semibold text-[20px] text-center'>$59.95</p>
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