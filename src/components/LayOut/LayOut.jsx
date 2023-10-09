import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom' //يتنقل بين الصفحات
import Footer from '../Footer/Footer'

export default function LayOut() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

