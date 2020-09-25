import Todo from '../../models/Todo';
import { loadTodosState } from '../../models/local-storage';
import { ADD_TODO,  COMPLETED, EDIT , SAVE, CANCEL, DELETE, CLEAR_COMPLETED} from '../../actions/todos';

const stateFromLocalStorage = loadTodosState();

const initialState = {todos: stateFromLocalStorage || []};

export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {todos: state.todos.concat(action.todo)};
        case COMPLETED:
            return {todos: state.todos.map((todo: Todo) => {

                if (action.id === todo.getId()) {
                    todo.setCompleted(!todo.getCompleted());
                }
                    console.log(todo);
                return todo;
                })} // map through todos, and flip "completed" flag on the one in question
        case EDIT:
            return {todos: state.todos.map((todo: Todo) => {
                if (action.id === todo.getId()) {
                    todo.setInEdit(true)
                }
                return todo
                })}
        case SAVE:
            return {todos: state.todos.map((todo: Todo) => {
                    if (action.id === todo.getId()) {
                        console.log('saving');
                        console.log('the category is', action.toDoCategory);
                        todo.setText(action.todoText)
                        todo.setCategory(action.toDoCategory);
                        todo.setInEdit(false);
                    }
                    return todo
                })}
        case CANCEL:
            return {todos: state.todos.map((todo: Todo) => {
                    if (action.id === todo.getId()) {
                        todo.setInEdit(false)
                    }
                    return todo
                })}
        case DELETE:
            return {todos: state.todos.filter((todo: Todo) => {
                if (action.id !== todo.getId()) {
                    return todo;
                }
            })}
        case CLEAR_COMPLETED:
            return {todos: state.todos.filter((todo: Todo) => {
                if (!todo.getCompleted()) {
                    return todo;
                }
            })}
        default:
            return state;
    }
};
