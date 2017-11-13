import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AuthorListRow = ({author, deleteAuthor}) => {
    const deleteAuthorHandler = (event) => {
        event.preventDefault();
        deleteAuthor(author);
    };

    return (
        <tr>
            <td><a href="#" onClick={deleteAuthorHandler}>Delete</a></td>
            <td><Link to={'/author/' + author.id}>{author.firstName}</Link></td>
            <td>{author.lastName}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.array.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;