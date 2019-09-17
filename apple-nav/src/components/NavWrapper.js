import React from 'react'
import { Route, Link } from 'react-router-dom'

import Nav from './Nav'
import SubNav from './SubNav'

function NavWrapper(props) {
    //console.log(props)
    const data = props.data
    return (
        <nav>
            <Link to='/'>home</Link>
            {Object.keys(props.data).map(e=><Nav key={e} label={e} />)}
            <Route path='/:nav' render={props=><SubNav {...props} data={data}/>} />
        </nav>
    )
}

export default NavWrapper