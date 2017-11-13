import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            deleting: false
        };

        this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);
    }

    authorRow(author, index) {
        return <div key={index}>{author.firstName}</div>;
    }

    redirectToAddAuthorPage() {
        browserHistory.push('/author');
    }

    deleteAuthor(author) {
        this.setState({deleting: true});

        this.props.actions.deleteAuthor(author)
            .then(() => {
                this.setState({deleting: false});
                toastr.success('Author deleted!');
            }).catch(error => {
                toastr.error(error);
                this.setState({deleting: false});
            });
    }

    render () {
        const { authors } = this.props;

        return (
            <div>
                <h1>Authors</h1>
                <input
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.redirectToAddAuthorPage} />
                <AuthorList authors={authors} deleteAuthor={this.deleteAuthor} />
            </div>
        );
    }
}

AuthorPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);