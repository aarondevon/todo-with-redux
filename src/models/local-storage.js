import Todo from './Todo';

export const loadTodosState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return [];
    }
    const todosFromLocalStorage = JSON.parse(serializedState);
    return todosFromLocalStorage.map(todoFromLocalStorage => {
      const {text, category, inEdit, completed, id} = todoFromLocalStorage;
      return new Todo(text, category, inEdit, completed, id);
    });
  } catch (err) {
    return undefined;
  }
};

export const saveTodosState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore errors
  }
}