import database from "../firebase/firebase";
import Todo from "../models/Todo";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const EDIT = 'EDIT';
export const SAVE = 'SAVE';
export const CANCEL = 'CANCEL';
export const REMOVE = 'REMOVE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// Add todo to the database and local storage
export const doAddToDo = (todoInput: string, toDoCategory: string) => (dispatch: any) => {

    const todo = {
        category: toDoCategory,
        todoText: todoInput.trim(),
        inEdit: false,
        completed: false,
    };

    database.ref('todos').push(todo).then((ref:any) => {
        dispatch({
            type: ADD_TODO,
            todo: new Todo(todoInput, toDoCategory, false, false, ref.key)
        });
    });
}

// Remove todo from the database and local storage
export const doRemoveToDo = (id: string) => (dispatch: any) => {
    database.ref(`todos/${id}`).remove().then(() => {
        dispatch({
            type: REMOVE,
            id: id
        });
    });
}
