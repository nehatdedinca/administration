import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassNam="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassNam="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassNam="active">About</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;