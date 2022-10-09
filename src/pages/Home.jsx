import React from 'react';
import { LandingPageCard } from '../componants/LandingPageCard';
import Lottie from "lottie-react";
import reading from '../Utilities/reading.json'
const Home = () => {
    return (
        <div className='grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-5 '>
            <div>
                <LandingPageCard/>
            </div>
            <div>
                <Lottie animationData={reading}  loop={true}></Lottie>
            </div>
            
        </div>
    );
};

export default Home;