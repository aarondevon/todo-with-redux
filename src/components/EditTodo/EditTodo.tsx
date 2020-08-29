import React from 'react';
import {connect} from "react-redux";
import './EditTodo.scss';
import Todo from '../../models/Todo';

interface EditProps {
    todo: Todo,
    isInEdit: boolean,
    onSave: ( todoText: string, id: string) => any,
    onCancel: (id: string) => any

}

interface EditState {
  todoText: string;
}

class EditTodo extends React.Component<EditProps, EditState> {
  state = {
    todoText: this.props.todo.getText()
  }
  // set event to proper type
  handleOnChange(event: any) {

    console.log(event);
    this.setState( {
      todoText: event.target.value
    })
  }

  handleSaveTodo() {
    this.props.onSave(this.state.todoText, this.props.todo.getId());
  }

  handleCancelTodo() {
    this.props.onCancel(this.props.todo.getId());
  }


  render() {
    return (
      <div className="edit-item">
        <p className="todo-text">
          <input type="text" value={this.state.todoText} onChange={(event) => this.handleOnChange(event)}/>
        </p>
          <div>
              <button className="button" onClick={() => this.handleSaveTodo()}>Save</button>
              <button className="button" onClick={() => this.handleCancelTodo()}>Cancel</button>
          </div>


      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
    onSave: (todoText: string, id: string) => dispatch({
        type: 'SAVE',
        todoText: todoText,
        id: id
    }),
    onCancel: (id: string) => dispatch({
        type: 'CANCEL',
        id: id
    })
});

export default connect(null, mapDispatchToProps)(EditTodo);