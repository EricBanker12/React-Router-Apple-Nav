import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    return <Link to={`/${props.label}`}>{props.label}</Link>
}

export default Nav