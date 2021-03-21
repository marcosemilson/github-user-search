import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const Navbar = ()=>(
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link 
                to="/"
                type="button"
                className="nav-logo-text"
            >
            <h6>Bootcamp DevSuperior</h6>
            </Link>
        </div>
    </nav>
);
export default Navbar;