import React, {ChangeEvent} from 'react';
import ToDoCategory from '../ToDoCategory/ToDoCategory';
import {connect} from 'react-redux';
import './AddTodo.scss'
import { doAddToDo} from "../../actions/todos";

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
      event.preventDefault();

      const { todoInput, toDoCategory } = this.state;

      this.props.addTodo(todoInput.trim(), toDoCategory);

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
   addTodo: (todoInput: string, toDoCategory: string) => dispatch(doAddToDo(todoInput, toDoCategory))
});

export default connect(null, mapDispatchToProps)(AddTodo);