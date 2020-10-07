import React from 'react';
import {connect} from "react-redux";
import './EditTodo.scss';
import Todo from '../../models/Todo';
import ToDoCategory from "../ToDoCategory/ToDoCategory";
import { doCancel, doEdit } from "../../actions/todos";

interface EditProps {
    todo: Todo,
    isInEdit: boolean,
    onSave: ( todoText: string, toDoCategory: string, id: string) => any,
    onCancel: (id: string) => any

}

interface EditState {
  todoText: string;
  toDoCategory: string
}

class EditTodo extends React.Component<EditProps, EditState> {
  state = {
    todoText: this.props.todo.getText(),
    toDoCategory: this.props.todo.getCategory()

  }
  // set event to proper type
  handleOnChange(event: any) {

    this.setState( {
      todoText: event.target.value
    })
  }

  handleCategoryChange(category: string) {

      if (this.state.toDoCategory !== category) {
          this.setState({
              toDoCategory: category
          })
      }
  }

  handleSaveTodo() {
    this.props.onSave(this.state.todoText, this.state.toDoCategory, this.props.todo.getId());
  }

  handleCancelTodo() {
    this.props.onCancel(this.props.todo.getId());
  }


  render() {
    return (
      <div className="edit-item">
          <ToDoCategory category={this.props.todo.getCategory()} onCategoryChange={this.handleCategoryChange.bind(this)} />
        <p className="todo-text">
          <input type="text" value={this.state.todoText} onChange={(event) => this.handleOnChange(event)}/>
        </p>
          <div className="edit-buttons">
              <button className="button save-edit" onClick={() => this.handleSaveTodo()}>Save</button>
              <button className="button" onClick={() => this.handleCancelTodo()}>Cancel</button>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
    onSave: (todoText: string, toDoCategory: string, id: string) => dispatch(doEdit(todoText, toDoCategory, id)),
    onCancel: (id: string) => dispatch(doCancel(id))
});

export default connect(null, mapDispatchToProps)(EditTodo);