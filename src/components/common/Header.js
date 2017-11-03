import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassNam="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassNam="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassNam="active">About</Link>
            <LoadingDots interval={100} dots={20}/>
        </nav>
    );
};

export default Header;