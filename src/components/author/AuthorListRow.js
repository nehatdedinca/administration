import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AuthorListRow = ({author}) => {
    return (
        <tr>
            <td><Link to={'/author/' + author.id}>{author.firstName}</Link></td>
            <td>{author.lastName}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.array.isRequired
};

export default AuthorListRow;