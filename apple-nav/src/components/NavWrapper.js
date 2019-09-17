import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './Nav'
import SubNav from './SubNav'

function NavWrapper(props) {
    return (
        <BrowserRouter>
            <nav>
                <Nav />
                <nav>
                    <SubNav />
                </nav>
            </nav>
        </BrowserRouter>
    )
}

export default NavWrapper