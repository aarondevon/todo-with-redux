import React, {ChangeEvent} from 'react';
import Todo from '../../models/Todo';
import ToDoCategory from '../ToDoCategory/ToDoCategory';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.scss'
import database from '../../firebase/firebase';

interface AddTodoProps {
    addTodo: (todoText: string, toDoCategory: string, id: string) => void
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

  // startAddTodo(state: any) {
  //       return (dispatch: any) => {
  //           const { todoInput, toDoCategory} = this.state;
  //           this.props.addTodo(todoInput.trim(), toDoCategory)
  //       }
  // }
  handleAddTodo(event: React.MouseEvent<HTMLButtonElement> ) {
      event.preventDefault();

      const { todoInput, toDoCategory } = this.state;

      const todo = {
          category: toDoCategory,
          todoText: todoInput.trim(),
          inEdit: false,
          completed: false,
      };
      console.log('made it here');
          database.ref('todos').push(todo).then((ref:any) => {
              this.props.addTodo(todoInput.trim(), toDoCategory, ref.key);
          });
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
   addTodo: (todoInput: string, toDoCategory: string, id:string) => dispatch({
       type: 'ADD_TODO',
       todo: new Todo(todoInput, toDoCategory, false, false, id)
   })
});

export default connect(null, mapDispatchToProps)(AddTodo);