import React from 'react'
import {Link} from 'react-router-dom'

function SubNav(props) {
    //console.log(props)
    const navLink = props.match.params.nav

    return (
        <nav>
            {props.data[navLink].map(e=><Link key={e} to={`/${navLink}/${e}`}>{e}</Link>)}
        </nav>
    )
}

export default SubNav