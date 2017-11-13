import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({course, deleteCourse}) => {
    const deleteCourseHandler = (event) => {
        event.preventDefault();
        deleteCourse(course);
    };

    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a> | <a href="#" onClick={deleteCourseHandler}>Delete</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;