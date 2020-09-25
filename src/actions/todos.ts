export const SORT = 'SORT';

// export const doSort = (category: string) => ({
//     type: SORT,
//     category: category
// });

export function doSort(category: string) {
    return function inner(dispatch: any) {
        setTimeout(() => {
            dispatch({
                type: SORT,
                category: category
            });
        }, 3000);
    }
}

// what an action can be, when it get to a reducer:
// 1. a plain JS object

// what an action can be when it's dispatched:
// 1. a plain JS object
// (if there's thunk set up as a middleware): 2. a function
