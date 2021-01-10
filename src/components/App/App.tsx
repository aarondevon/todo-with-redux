import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import DisplayTodos from '../DisplayTodos/DisplayTodos'
import '../../styles/styles.scss'
import './App.scss';
import SortButtons from "../SortButtons/SortButtons";
import ClearCompleted from "../ClearCompleted/ClearCompleted";


class App extends React.Component<any, any> {
    render() {
        return (
            <div id="app">
                <h1>todos</h1>
                <div className="todo-form">
                    <AddTodo />
                    <SortButtons />
                    <DisplayTodos />
                    <ClearCompleted />
                </div>
            </div>
        );
    }
}

export default App;
