import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassNam="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassNam="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassNam="active">About</Link>
        </nav>
    );
};

export default Header;