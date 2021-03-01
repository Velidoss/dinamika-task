import React from 'react';
import {useSelector} from 'react-redux';
import todosSelector from '../../store/selectors/todosSelector';

import TodoItem from './TodoItem';

const Todos = () => {

  const todosData = useSelector(todosSelector);
  const style={
    width: '80%',
  }

  return (
    <div style={style}>
      {
        todosData 
        ? todosData.map((todo) => <TodoItem 
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
        />)
        : <div></div>
      }
    </div>
)};

export default Todos;