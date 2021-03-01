import React from 'react';

const Todos = ({todosData}) => {

  return (
    <div>
      {
        todosData 
        ? todosData.map((todo) => <div key={todo.id}>
          {todo.text}
        </div>)
        : <div>123</div>
      }
    </div>
)};

export default Todos;