import React from 'react';
import Todo from "../../models/Todo";
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import EditTodo from "../EditTodo/EditTodo";

class DisplayTodos extends React.Component<any, any> {
    getPrintTodos() {
        return this.props.todos.todos.map((todo:Todo) => {
            if (todo.getInEdit()) {
               return <EditTodo key={todo.getId()} todo={todo} isInEdit={todo.getInEdit()}/>
            }
            return <TodoItem key={todo.getId()} todo={todo} isCompleted={todo.getCompleted()}/>;
        })
    }

    render() {
        return (
            <div>
                {this.getPrintTodos()}
            </div>

        );
    }
}

const mapPropsToState = (state: any) => ({
    todos: state.addTodos
});

export default connect(mapPropsToState)(DisplayTodos);