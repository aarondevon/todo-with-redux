import React from 'react';
import Todo from "../../models/Todo";
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import EditTodo from "../EditTodo/EditTodo";

class DisplayTodos extends React.Component<any, any> {

    getCollection() {
        return this.props.todos.todos.filter((todo: Todo) => {
            if (this.props.category.category === todo.getCategory()) {
                console.log(this.props.category.category);
                return todo;
            } else if(this.props.category.category === 'all') {
                console.log(this.props.category.category);
                return todo;
            }
        })
    }

    getPrintTodos(collection: any) {

        console.log(collection);
        return collection.map((todo:Todo) => {
            if (todo.getInEdit()) {
                return <EditTodo key={todo.getId()} todo={todo} isInEdit={todo.getInEdit()}/>
            }
            return <TodoItem key={todo.getId()} todo={todo} isCompleted={todo.getCompleted()}/>;
        })
    }

    render() {
        return (
            <div>
                {this.getPrintTodos(this.getCollection())}
            </div>

        );
    }
}

const mapPropsToState = (state: any) => ({
    todos: state.todos,
    category: state.category
});

export default connect(mapPropsToState)(DisplayTodos);