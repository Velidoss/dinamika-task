import { Card } from 'antd';
import React from 'react';

const TodoItemComponent = ({title,text, id}) => {

  const style={
    width: '100%',
    marginTop: '20px',
  }

return (
  <Card style={style} title={title}>
    {text}
  </Card>
)};

export default TodoItemComponent