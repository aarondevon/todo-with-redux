import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {firebase} from "./firebase/firebase";
import './index.css';
import {todoReducer} from "./redux/reducers/todo-reducer";
import {categoryReducer} from "./redux/reducers/category-reducer";
import App from './components/App/App';
import LoginPage from "./components/LoginPage/LoginPage";
import { loadToDoState } from './actions/todos';
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
        todoReducer,
        categoryReducer
    }), composeEnhancers(applyMiddleware(thunk)));


store.subscribe(() => {
    saveTodosState(store.getState().todoReducer.todos);
});

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

// @ts-ignore
store.dispatch(loadToDoState()).then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/todos">
                            <App />
                        </Route>
                        <Route path="/">
                            <LoginPage />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
    } else {
        console.log('log out');
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
