import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';

const Error = () => {
    return (
        <div className=' h-screen flex justify-center items-center'>
            <div>
                <FontAwesomeIcon className='text-6xl text-purple-500' icon={faFaceFrown}></FontAwesomeIcon>
                <h1 className='text-2xl font-semibold'>Opps!! <br />
            404 not found the page you are looking for
            </h1>
            </div>
        </div>
    );
};

export default Error;