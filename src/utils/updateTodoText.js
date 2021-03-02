const updateTodoText = (todosArray, id, newText) => {
  return [...todosArray.map((todo) => {
    if (todo.id === id) {
      todo.text = newText
    } 
    return todo;
  })]
};

export default updateTodoText;