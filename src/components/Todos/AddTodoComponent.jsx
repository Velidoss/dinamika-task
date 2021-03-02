import React from 'react';
import {Form, Input, Button, Card} from 'antd';
import {useDispatch} from 'react-redux';
import {addTodoAC} from '../../store/TodosReducer';

const AddTodoComponentComponent = () => {

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const {title, text} = values;
    dispatch(addTodoAC(title, text));
    form.resetFields();
  }

  return (
    <Card 
      style={{marginTop:'20px'}}
      title="Add new todo"
    >
      <Form
        form={form}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item 
          label="Todo's title" 
          name="title"
          rules={[
            {
              required: true,
              message: 'You have to enter some text',
            },
          ]}
          >
          <Input placeholder="type in todo's title"/>
        </Form.Item>
        <Form.Item label="Todo's text" name="text">
          <Input placeholder="type in todo's text"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add todo</Button>
        </Form.Item>
      </Form>
    </Card>
  )
};

export default AddTodoComponentComponent;