import database from "../firebase/firebase";
import Todo from "../models/Todo";
import {Dispatch} from "redux";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const EDIT = 'EDIT';
export const SAVE = 'SAVE';
export const CANCEL = 'CANCEL';
export const REMOVE = 'REMOVE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_TODOS = 'SET_TODOS';

// Add ToDo to the database and local storage
export const doAddToDo = (todoInput: string, toDoCategory: string) => (dispatch: Dispatch) => {

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

// Complete ToDo
export const doComplete = (id: string, completed: boolean) => (dispatch: Dispatch) => {
    database.ref(`todos/${id}/complete`).once('value').then(snapshot => {

    })
    database.ref(`todos/${id}`).update({completed: !completed}).then(() => {
        dispatch({
            type: COMPLETED,
            id: id
        })
    })
}

// Edit ToDo
export const doInEdit = (id: string) => (dispatch: Dispatch) => {
    database.ref(`todos/${id}`).update({inEdit: true}).then(() => {
        dispatch({
            type: EDIT,
            id: id
        });
    });
};

//

// Remove ToDo from the database and local storage
export const doRemoveToDo = (id: string) => (dispatch: Dispatch) => {
    database.ref(`todos/${id}`).remove().then(() => {
        dispatch({
            type: REMOVE,
            id: id
        });
    });
}

// Set data at start of app
export const loadToDoState = () => {
    return  (dispatch: Dispatch) => {
        return  database.ref('todos').once('value').then((snapshot) => {
            const todos: any[] = [];
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const {todoText, category, inEdit, completed,} = childSnapshot.val();
                    const id: string | null = childSnapshot.key;
                    todos.push(new Todo(todoText, category, inEdit, completed, id));
                });
            }
            dispatch({
                type: SET_TODOS,
                todos: todos
            });
        });
    };
};
