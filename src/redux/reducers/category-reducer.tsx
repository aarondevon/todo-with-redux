import {SORT} from '../../actions/category';
import Categories from '../../models/categories';
import {Action} from "redux";

interface State {
    category: Categories
}

interface ChangeSortAction extends Action<String> {
    category: Categories
}

const initialState: State = {category: Categories.ALL};

export const categoryReducer = (state = initialState, action: ChangeSortAction): State => {
    switch (action.type) {
        case SORT:
            return {category: action.category}
        default:
            return state;
    }
};
