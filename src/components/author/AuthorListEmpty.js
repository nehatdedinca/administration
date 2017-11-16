import React from 'react';

class AuthorListEmpty extends React.Component {
    render() {
        return (
          <div>
              <h3>Whoops!</h3>
              <p>The author list is emptry, feel free to add any author!</p>
          </div>  
        );
    }
}

export default AuthorListEmpty;