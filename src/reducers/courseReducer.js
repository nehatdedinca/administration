import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state,
                Object.assign({}, state.course)
            ];

        default:
            return state;
    }
}