import React from 'react';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import AddTodo from '../AddTodo/AddTodo';
import DisplayTodos from '../DisplayTodos/DisplayTodos'
import '../../styles/styles.scss'
import {addTodoReducer} from "../../redux/reducers/add-todo-reducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

const store = createStore(
    combineReducers({
        addTodos: addTodoReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
            <div id="app">
                <AddTodo />
                <DisplayTodos/>
                {/*<div className="todos">*/}
                {/*    {this.getPrintTodos()}*/}
                {/*</div>*/}

            </div>
            </Provider>
        );
    }
}

export default App;
