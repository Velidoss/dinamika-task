import { Card, Button } from 'antd';
import React from 'react';
import {removeTodo} from '../../store/TodosReducer';
import {useDispatch} from 'react-redux';

const TodoItem = ({title,text, id}) => {
  const dispatch = useDispatch();
  const style={
    width: '100%',
    marginTop: '20px',
  }

return (
  <Card style={style} title={title}>
    {text}
    <Button 
      onClick={() => dispatch(removeTodo(id))}
      type="primary" 
      danger
    >
      Remove
    </Button>
  </Card>
)};

export default TodoItem