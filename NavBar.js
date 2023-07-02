import React, { Component, Fragment} from "react";
import "./loginform.css"




class NavBar extends Component {
    

    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-expand bg-dark">
                    <div>
                        <h1><a className="navbar-brand m-15" href="#">SITE IS ONLY FOR THE G.O.A.T'S</a></h1>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className='nav-item dropdown'>
                        <a className="nav-link dropdown-toggle" data-bs-target="dropdown" data-bs-toggle="dropdown" role="button" aria aria-expanded="false" href="#"></a>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default NavBar;