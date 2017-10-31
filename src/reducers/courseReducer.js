export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, state.course)
            ];

        default:
            return state;
    }
}