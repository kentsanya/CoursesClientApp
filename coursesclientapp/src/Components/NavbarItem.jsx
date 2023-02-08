import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class NavbarItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { release: "Init" };
    }
    render()
    {
        return (<ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="Index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">{this.state.release}</a></li>
            <li class="nav-item"><a class="nav-link" href="#">{this.props.About}</a></li>
        </ul>)
    }
}

export default NavbarItem