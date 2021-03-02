import React from 'react';
import {Form, Input, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {addTodoAC} from '../../store/TodosReducer';

const AddTodoComponent = () => {

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const {title, text} = values;
    console.log(values)
    dispatch(addTodoAC(title, text));
  }

  return (
    <Form
    layout="horizontal"
    onFinish={onFinish}
  >
    <Form.Item name="title">
      <Input placeholder="type in todo's title"/>
    </Form.Item>
    <Form.Item name="text">
      <Input placeholder="type in todo's text"/>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">Add todo</Button>
    </Form.Item>
  </Form>
  )
};

export default AddTodoComponent;