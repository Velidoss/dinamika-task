import { Card, Button, Form, Input } from 'antd';
import React from 'react';
import {editTodo} from '../../store/TodosReducer';
import {removeTodo} from '../../store/TodosReducer';
import {useDispatch} from 'react-redux';

const TodoItemEditable = ({title, text, id}) => {

  const dispatch = useDispatch();
  const style={
    width: '100%',
    marginTop: '20px',
  }

  const onFinish = (values) => {
    dispatch(editTodo(id, values.newText));
  }

  return (
    <Card style={style} title={title}>
      <Form
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item name="newText">
          <Input placeholder={text}/>
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit"
          >
            Edit
          </Button>          
          <Button 
            onClick={() => dispatch(removeTodo(id))}
            type="primary" 
            danger
            style={{
              marginLeft: '40px'
            }}
          >
            Remove
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
};

export default TodoItemEditable;