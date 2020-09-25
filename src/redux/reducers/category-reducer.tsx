import {SORT} from '../../actions/todos';

const initialState = {category: 'all'};

export const categoryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SORT:
            return {category: action.category}
        // case 'GENERAL':
        //     return {category: 'general'}
        // case 'GROCERY':
        //     return {category: 'grocery'}
        // case 'WORK':
        //     return {category: 'work'}
        default:
            return state;
    }
};
