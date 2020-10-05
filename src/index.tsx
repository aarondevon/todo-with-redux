import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import './index.css';
import {todoReducer} from "./redux/reducers/todo-reducer";
import {categoryReducer} from "./redux/reducers/category-reducer";
import { loadToDoState } from './actions/todos';
import {saveTodosState} from './models/local-storage';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routers/AppRouter";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        todoReducer,
        categoryReducer
    }), composeEnhancers(applyMiddleware(thunk)));


store.subscribe(() => {
    saveTodosState(store.getState().todoReducer.todos);
});

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('root'));
      hasRendered = true
  }
};

const jsx = (
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in', user.uid);
        // @ts-ignore
        store.dispatch(loadToDoState()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/todos');
            }
        })
    } else {
        console.log('log out');
        renderApp();
        history.push('/');
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
