import React, { useRef, useState, useCallback, useEffect } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { createGlobalStyle } from 'styled-components';
// import { getUTCNow } from '../../components/utils';
// import { getRebaseFrequency, getNextRebase } from "../../core/web3";
// import * as selectors from '../../store/selectors';

const GlobalStyles = createGlobalStyle`
  .progress-content {
    max-width: 200px;
    width: 100%;
    border-radius: 50%;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    filter: drop-shadow(0px 0px 4px #FFFFFF);
  }

  .rebase-content {
    text-align: center;
    .rebase-title {
      font-size: 16px;
      @media only screen and (max-width: 1500px) and (min-width: 1200px) {
        font-size: 12px;
      }
    }
    .rebase-time {
      font-size: 20px;
    }
  }
`;

function CapGradientSVG() {
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={"rebaseCap"} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor="#33E9E9" />
          <stop offset="100%" stopColor="#33E9E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const RebaseBar = ({ center = false, image }) => {

  return (
    <>
      <GlobalStyles />
      <div className={center ? 'progress-content m-auto' : 'progress-content'}>
        <CapGradientSVG />
        <CircularProgressbarWithChildren value={100}
          strokeWidth="4"
          counterClockwise={true}
          styles={buildStyles({
            pathColor: `url(#rebaseCap)`,
            trailColor: 'rgb(255,255,255,0.05)',
            strokeLinecap: "butt"
          })}>
          <div className="flex flex-col rebase-content">
            <img
              loading="lazy"
              src={image}
              alt='support'
              className='rounded-full w-[148px] h-[148px]'
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
export default RebaseBar;
