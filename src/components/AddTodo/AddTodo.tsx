import React, {ChangeEvent} from 'react';
import Todo from '../../models/Todo';
import ToDoCategory from '../ToDoCategory/ToDoCategory';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.scss'

interface AddTodoProps {
    addTodo: (todoText: string, toDoCategory: string) => void
}

interface AddTodoState {
    todoInput: string,
    toDoCategory: string

}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
    constructor(props: AddTodoProps) {
        super(props);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
  state = {
    todoInput: '',
    toDoCategory: 'General'
  }

  handleAddTodo() {
    this.props.addTodo(this.state.todoInput.trim(), this.state.toDoCategory);
    this.setState( {
      todoInput: ''
    })
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      todoInput: event.target.value
    });
  }

  handleCategoryChange(category: string) {
    this.setState({
        toDoCategory: category
    })
  };

  render() {
    return (
      <div className="container">
          <ToDoCategory testTest='test' onCategoryChange={this.handleCategoryChange}/>
          <div className="todo-wrapper">
              <input id="todo-input" value={this.state.todoInput} onChange={(event) => {
                  this.handleInputChange(event);
              }} type="text"/>

              <button className="button" onClick={() => this.handleAddTodo()}>Add Todo</button>
          </div>

      </div>
    )
  }
}

// const mapDispatchToProps2 = (dispatch: any) => ({
//       addTodo: (todoInput: string) => dispatch({  type: 'ADD_TODO', todo: new Todo(todoInput, false, false, uuidv4())})
// });

const mapDispatchToProps = (dispatch:any) => ({
   addTodo: (todoInput: string, toDoCategory: string) => dispatch({
       type: 'ADD_TODO',
       todo: new Todo(todoInput, toDoCategory, false, false, uuidv4())
   })
});

export default connect(null, mapDispatchToProps)(AddTodo);