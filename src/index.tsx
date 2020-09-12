import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import './index.css';
import {addTodoReducer} from "./redux/reducers/add-todo-reducer";
import {categoryReducer} from "./redux/reducers/category-reducer";
import App from './components/App/App';
import {saveTodosState} from './models/local-storage';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

const store = createStore(
    combineReducers({
        addTodos: addTodoReducer,
        category: categoryReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
    // @todo solve: #1 the TS issue, #2 the extra nesting of .todos
    // @ts-ignore
    saveTodosState(store.getState().addTodos.todos);
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
