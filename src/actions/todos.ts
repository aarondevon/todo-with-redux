import database from "../firebase/firebase";
import Todo from "../models/Todo";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const EDIT = 'EDIT';
export const SAVE = 'SAVE';
export const CANCEL = 'CANCEL';
export const REMOVE = 'REMOVE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_TODOS = 'SET_TODOS';

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

// Set data at start of app
const setToDos = (todos: any) => ({
        type: SET_TODOS,
            todos: todos
});

export const startSetToDos = () => {
    return  (dispatch: any) => {
        return  database.ref('todos').once('value').then((snapshot) => {
            const todos: any[] = [];
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const {todoText, category, inEdit, completed,} = childSnapshot.val();
                    const id: string | null = childSnapshot.key;
                    todos.push(new Todo(todoText, category, inEdit, completed, id));
                });
            }
            dispatch(setToDos(todos));
        });
    };
};
