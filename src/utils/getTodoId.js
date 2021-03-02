const getTodoId = (todoArray) => {
  return todoArray[todoArray.length - 1].id + 1;
};

export default getTodoId;