import React from "react";
import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Layout = () => {

    return (
        <React.Fragment>
            <Nav />
            <Outlet className="content-body" />
            <Footer />
        </React.Fragment>
    )
} 

export default Layout;