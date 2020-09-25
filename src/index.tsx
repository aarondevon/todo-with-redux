import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import './index.css';
import {addTodoReducer} from "./redux/reducers/add-todo-reducer";
import {categoryReducer} from "./redux/reducers/category-reducer";
import App from './components/App/App';
import {saveTodosState} from './models/local-storage';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        addTodos: addTodoReducer,
        category: categoryReducer
    }), composeEnhancers(applyMiddleware(thunk)));


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
