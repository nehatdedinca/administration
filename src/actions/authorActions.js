import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
    return { type: types.CREATE_AUTHORS_SUCCESS, author };
}

export function updateAuthorSuccess(author) {
    return { type: types.UPDATE_AUTHORS_SUCCESS, author };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveAuthor(author) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());        
        return AuthorApi.saveAuthor(author).then(saveAuthor => {
            author.id ? dispatch(updateAuthorSuccess(saveAuthor)) :
                dispatch(createAuthorSuccess(saveAuthor));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}