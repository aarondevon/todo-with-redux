import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/styles.scss'
import './App.scss';
import AddTodo from "../AddTodo/AddTodo";
import SortButtons from "../SortButtons/SortButtons";
import DisplayTodos from "../DisplayTodos/DisplayTodos";
import ClearCompleted from "../ClearCompleted/ClearCompleted";
import { startLogout } from "../../actions/auth";
import { connect } from "react-redux";

class App extends React.Component<any, any> {

    render() {
        return (
            <div id="app">
                <button className="logout" onClick={this.props.startLogout}>Logout</button>
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


const mapDispatchToProps = (dispatch: any) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(App);
