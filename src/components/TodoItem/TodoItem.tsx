import React from 'react';
import './TodoItem.scss';
import { doInEdit, doComplete, doRemoveToDo } from '../../actions/todos';
import { connect } from "react-redux";
import Todo from "../../models/Todo";

interface TodoItemProps {
    todo: Todo,
    isCompleted: boolean
    setCompleted: (id: string, completed: boolean) => any // TODO - type this fully (look at redux types library in node modules for reference),
    onEdit: (id: string) => any,
    onRemove: (id: string) => any

}

interface todoItemState {

}

class TodoItem extends React.Component<TodoItemProps, todoItemState> {
   isCompleted(check: boolean) {
       return  check;
   }

  handleCompleteTodo(event:any) {
    this.props.setCompleted(this.props.todo.getId(), this.props.todo.getCompleted());
  }

  render() {
    return (
      <div id="todo-item">

        <p id="todo-text" className={this.props.todo.getCompleted()? "completed" : ""}>

          <input type="checkbox" id={`${this.props.todo.getCompleted()}`} checked={this.props.isCompleted}
                 onChange={(event) => this.handleCompleteTodo(event)}/>
          <span className="todo-text">{this.props.todo.getText()}</span>
        </p>
          <div className="edit-delete-container">
            <button className="button edit" onClick={() => this.props.onEdit(this.props.todo.getId())}>Edit</button>
            <button className="button delete" onClick={() => this.props.onRemove(this.props.todo.getId())}>Delete</button>
          </div>


      </div>
    );
  };
}

const mapDispatchToProps = (dispatch: any) => ({
    setCompleted: (id: string, completed: boolean) => dispatch(doComplete(id, completed)),
    onEdit: (id: string) => dispatch(doInEdit(id)),
    onRemove: (id: string) => dispatch(doRemoveToDo(id))
});

export default connect(null, mapDispatchToProps)(TodoItem);