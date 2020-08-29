import React from 'react';
import './TodoItem.scss';
import {connect} from "react-redux";
import Todo from "../../models/Todo";

interface TodoItemProps {
    todo: Todo,
    isCompleted: boolean
    setCompleted: (id: string) => any // TODO - type this fully (look at redux types library in node modules for reference),
    onEdit: (id: string) => any,
    onDelete: (id: string) => any

}

interface todoItemState {

}

class TodoItem extends React.Component<TodoItemProps, todoItemState> {
   isCompleted(check: boolean) {
       return  check;
   }

  handleCompleteTodo(event:any) {

    this.props.setCompleted(this.props.todo.getId());
  }

  render() {
    return (
      <div id="todo-item">

        <p id="todo-text" className={this.props.todo.getCompleted()? "completed" : ""}>
            {console.log(this.props.todo)}
            {console.log(this.props.todo.getCompleted())}
          <input type="checkbox" id={`${this.props.todo.getCompleted()}`} checked={this.props.isCompleted}
                 onChange={(event) => this.handleCompleteTodo(event)}/>
          {this.props.todo.getText()}
        </p>
          <div>
            <button className="button edit" onClick={() => this.props.onEdit(this.props.todo.getId())}>Edit</button>
            <button className="button delete" onClick={() => this.props.onDelete(this.props.todo.getId())}>Delete</button>
          </div>


      </div>
    );
  };
}

const mapDispatchToProps = (dispatch: any) => ({
    setCompleted: (id: string) => dispatch({
    type: 'COMPLETED',
    id: id
  }),
    onEdit: (id: string) => dispatch({
        type: 'EDIT',
        id: id
    }),
    onDelete: (id: string) => dispatch({
        type: 'DELETE',
        id: id
    })
});

export default connect(null, mapDispatchToProps)(TodoItem);