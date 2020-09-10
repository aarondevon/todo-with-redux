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
    toDoCategory: 'general'
  }

  handleAddTodo(event: React.MouseEvent<HTMLButtonElement> ) {
    this.props.addTodo(this.state.todoInput.trim(), this.state.toDoCategory);
    this.setState( {
      todoInput: ''
    })
      event.preventDefault();
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
          <form>
              <div className="add-category-container">
                  <h2>Category:</h2>
                  <ToDoCategory category= '' onCategoryChange={this.handleCategoryChange}/>
              </div>

              <div className="todo-wrapper">
                  <input id="todo-input" value={this.state.todoInput} onChange={(event) => {
                      this.handleInputChange(event);
                  }} type="text"/>

                  <button type="submit" className="button" onClick={(event) => this.handleAddTodo(event)}>Add todo</button>
              </div>
          </form>


      </div>
    )
  }
}

const mapDispatchToProps = (dispatch:any) => ({
   addTodo: (todoInput: string, toDoCategory: string) => dispatch({
       type: 'ADD_TODO',
       todo: new Todo(todoInput, toDoCategory, false, false, uuidv4())
   })
});

export default connect(null, mapDispatchToProps)(AddTodo);