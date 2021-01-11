import React from 'react';
import { connect } from "react-redux";
import { doClearCompleted } from "../../actions/todos";
import Todo from '../../models/Todo';

class ClearCompleted extends React.Component<any, any> {

    onClearCompleted() {
        const completedToDos = this.props.todoReducer.todos.filter((todo: Todo) => todo.getCompleted());

        this.props.clearCompleted(completedToDos);
    }

    render() {
        return (
            <div>
                <button className="button clear-completed" onClick={() => this.onClearCompleted()}>Clear Completed</button>
            </div>
        )
    }
}

const mapPropsToState = (state: any) => ({
    todoReducer: state.todoReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  clearCompleted: (completedToDos: any) => dispatch(doClearCompleted(completedToDos))
})

export default connect(mapPropsToState, mapDispatchToProps)(ClearCompleted);