import React from 'react';

class CourseListEmpty extends React.Component {
    render() {
        return (
          <div>
              <h3>Whoops!</h3>
              <p>The course list is emptry, feel free to add any course!</p>
          </div>  
        );
    }
}

export default CourseListEmpty;