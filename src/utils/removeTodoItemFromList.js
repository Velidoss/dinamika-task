const removeTodoItemFromList = (todosArray, id) => {
  return [...todosArray.filter((todo) => todo.id !== id)];
};

export default removeTodoItemFromList;