import React from 'react';
import {useSelector} from 'react-redux';
import todosSelector from '../../store/selectors/todosSelector';
import AddTodoComponentComponent from './AddTodoComponent';
import TodoItemComponent from './TodoItemComponent';

const TodosComponent = () => {

  const todosData = useSelector(todosSelector);
  const style={
    width: '80%',
  }

  return (
    <div style={style}>
      <AddTodoComponentComponent />
      {
        todosData 
        ? todosData.map((todo) => <TodoItemComponent 
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
        />)
        : <div></div>
      }
    </div>
)};

export default TodosComponent;