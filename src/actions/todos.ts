import database from "../firebase/firebase";
import Todo from "../models/Todo";
import {Dispatch} from "redux";
import axios from 'axios';

export const ADD_TODO: string = 'ADD_TODO';
export const COMPLETED: string = 'COMPLETED';
export const EDIT: string = 'EDIT';
export const SAVE: string = 'SAVE';
export const CANCEL: string = 'CANCEL';
export const REMOVE: string = 'REMOVE';
export const CLEAR_COMPLETED: string = 'CLEAR_COMPLETED';
export const SET_TODOS: string = 'SET_TODOS';

// Add ToDo to the database and local storage
export const doAddToDo = (todoInput: string, toDoCategory: string) => (dispatch: Dispatch, getState: any) => {

    const uid: string = getState().authReducer.uid;
    const todo: object = {
        toDoCategory: toDoCategory,
        todoText: todoInput.trim(),
        inEdit: false,
        completed: false,
    };
    database.ref(`users/${uid}/todos`).push(todo).then((ref:any) => {
        dispatch({
            type: ADD_TODO,
            todo: new Todo(todoInput, toDoCategory, false, false, ref.key)
        });
    });
}

// Complete ToDo
export const doComplete = (id: string, completed: boolean) => (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    database.ref(`users/${uid}/todos/${id}`).update({completed: !completed}).then(() => {
        dispatch({
            type: COMPLETED,
            id: id
        })
    })
}

// inEdit ToDo
export const doInEdit = (id: string) => (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    database.ref(`users/${uid}/todos/${id}`).update({inEdit: true}).then(() => {
        dispatch({
            type: EDIT,
            id: id
        });
    });
};

// Edit ToDo
export const doEdit = (todoText: string, toDoCategory: string, id: string) => (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    database.ref(`users/${uid}/todos/${id}`).update({todoText, toDoCategory, inEdit: false}).then(() => {
        dispatch({
            type: SAVE,
            todoText: todoText,
            toDoCategory: toDoCategory,
            id: id
        });
    });
};

export const doCancel = (id: string) => (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    database.ref(`users/${uid}/todos/${id}`).update({inEdit: false}).then(() => {
        dispatch({
            type: CANCEL,
            id: id
        })
    })
}

// Remove ToDo from the database and local storage
export const doRemoveToDo = (id: string) => (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    database.ref(`users/${uid}/todos/${id}`).remove().then(() => {
        dispatch({
            type: REMOVE,
            id: id
        });
    });
}

// Clear completed
export const doClearCompleted = (completedToDos: any) => async (dispatch: Dispatch, getState: any) => {
    const uid: string = getState().authReducer.uid;
    if (completedToDos.length < 1) {
        return;
    }
      for (let i = 0; i < completedToDos.length; i++) {
          await database.ref(`users/${uid}/todos/${completedToDos[i].getId()}`).remove()
    }
        dispatch({
            type: 'CLEAR_COMPLETED'
        });
}

// Set data at start of app
export const loadToDoState = () => {
    return  (dispatch: Dispatch, getState: any) => {
        const uid: string = getState().authReducer.uid;

        return  axios.get(`https://todo-29278.firebaseio.com/users/${uid}/todos.json?auth=7DIqbGEXmmY9b33uGycZnALs0PkebldcHYpOXfdx`).then((response) => {
            const todos: any[] = [];
            const todoObject = response.data;
            const testObject = {test1: {foo: 'bar'},test2: {foo: 'bar'},test3: {foo: 'bar'}}
                console.log('I am the data:', todoObject);
                for (let todo in todoObject ) {
                    console.log('I am a todo:', todoObject[todo]);
                    const {todoText, toDoCategory, inEdit, completed,} = todoObject[todo];
                    const id: string | null = todo;
                    todos.push(new Todo(todoText, toDoCategory, inEdit, completed, id));
                };
            dispatch({
                type: SET_TODOS,
                todos: todos
            });
        });
        // return  database.ref(`users/${uid}/todos`).once('value').then((snapshot) => {
        //     const todos: any[] = [];
        //     if (snapshot.exists()) {
        //         snapshot.forEach((childSnapshot) => {
        //             const {todoText, toDoCategory, inEdit, completed,} = childSnapshot.val();
        //             const id: string | null = childSnapshot.key;
        //             todos.push(new Todo(todoText, toDoCategory, inEdit, completed, id));
        //         });
        //     }
        //     dispatch({
        //         type: SET_TODOS,
        //         todos: todos
        //     });
        // });
    };
};
