import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import todosSelector from '../../store/selectors/todosSelector';
import {getTodos} from '../../store/TodosReducer';
import TodoItem from './TodoItem';

const Todos = () => {

  const todosData = useSelector(todosSelector);
  const style={
    width: '80%',
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

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