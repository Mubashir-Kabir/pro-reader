import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './componants/Footer';
import { Navbar } from './componants/Navbar';

const root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;