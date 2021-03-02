import { Card, Button, Form, Input } from 'antd';
import React from 'react';
import {editTodoAC, removeTodoAC} from '../../store/TodosReducer';
import {useDispatch} from 'react-redux';

const TodoItemEditableComponent = ({title, text, id}) => {

  const dispatch = useDispatch();
  const style={
    width: '100%',
    marginTop: '20px',
  }
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(editTodoAC(id, values.newText));
    form.resetFields();
  }

  return (
    <Card style={style} title={title}>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        form={form}
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
            onClick={() => dispatch(removeTodoAC(id))}
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

export default TodoItemEditableComponent;