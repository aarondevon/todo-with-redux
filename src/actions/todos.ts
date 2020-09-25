import database from "../firebase/firebase";
import Todo from "../models/Todo";

export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const EDIT = 'EDIT';
export const SAVE = 'SAVE';
export const CANCEL = 'CANCEL';
export const DELETE = 'DELETE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const doAddToDo = (todoInput: string, toDoCategory: string) => (dispatch: any) => {

    const todo = {
        category: toDoCategory,
        todoText: todoInput.trim(),
        inEdit: false,
        completed: false,
    };

    database.ref('todos').push(todo).then((ref:any) => {
        // this.props.addTodo(todoInput, toDoCategory, id);
        dispatch({
            type: ADD_TODO,
            todo: new Todo(todoInput, toDoCategory, false, false, ref.key)
        });
    });
}
