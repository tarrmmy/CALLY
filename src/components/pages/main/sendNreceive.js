import React from 'react';
import { Tabs, Form, Input, Button } from 'antd';
import Receive from '../receiveComponent';


const SendNreceive = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  const items = [
    {
      key: '1',
      label: 'Send',
      children: (
        <Form
          name="sendForm"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ amount: '', email: '' }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, amount: 'Please input your email!' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="amount"
            name="amount"
            rules={[{ required: true, amount: 'Please enter your amount!' }]}
          >
            <Input placeholder="Enter your amount" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: '2',
      label: 'Receive',
      children: (
        <div>
          <h5>You can receive money through the following methods:</h5>
          <Receive />
        </div>
      ),
    },
    
  ];

  return (
    <div className='px-10'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default SendNreceive