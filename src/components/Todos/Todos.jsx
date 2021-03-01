import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import todosSelector from '../../store/selectors/todosSelector';
import {getTodos} from '../../store/TodosReducer';

const Todos = () => {

  const todosData = useSelector(todosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {
        todosData 
        ? todosData.map((todo) => <div key={todo.id}>
          {todo.text}
        </div>)
        : <div></div>
      }
    </div>
)};

export default Todos;