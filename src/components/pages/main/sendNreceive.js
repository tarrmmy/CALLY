import React from 'react';
import { Tabs, Form, Input, Button, notification } from 'antd';
import Receive from '../receiveComponent';
import { supabaseClient } from '../../../supabase.config';
import { createTransaction } from '../../../services/wallet.service';


const SendNreceive = () => {

  // const [api, contextHolder] = notification();

  const onChange = (key) => {
    console.log(key);
  };

  const onFinish = async (values) => {
    try {
      const user = await supabaseClient.auth.getUser();
      const { amount, email } = values;
      const senderWallet = await supabaseClient.from('wallets').select('balance').eq('user_id', user.data.user.email).limit(1);
      const receiverWallet = await supabaseClient.from('wallets').select('balance').eq('user_id', email).limit(1);
      // if (receiverWallet.error)
      // console.log("Reciever ::: ", receiverWallet)
      if (receiverWallet?.data?.length == 0) {
        notification.error({
          message: 'Transfer Failed',
          description: "Receiver does not exist"
        })
      } 
      else {
        const numAmount = parseFloat(amount);
        const balance = senderWallet?.data?.[0]?.balance ?? 0;
        const receiverBalance = receiverWallet?.data?.[0]?.balance ?? 0;
        if (numAmount > balance) {
          notification.error({
            message: "Transfer Failed",
            description: "You do not have enough wallet balance."
          })
          // return;
        } else {
          // update sender balance
          await supabaseClient.from('wallets').update({
            'balance': balance - numAmount
          }).eq('user_id', user.data.user.email).then(async(v) => {
            // update receiver balance
            // const 
            await supabaseClient.from('wallets').update({
              'balance': receiverBalance + numAmount
            }).eq('user_id', email).then((_) => {
  
              createTransaction(
                email, amount, 'credit'
              );
              createTransaction(
                user.data.user.email, amount, 'debit'
              );
              notification.success({
                message: "Transfer Successful",
                description: `Your transfer to ${email} is successful.`
              })
            })
          })
        }
      }
    } catch (error) {
      notification.error({
        message: "Transfer Failed",
        description: error
      })
    }
  };


// Funding onFund
const onFund = async (values) => {
  try {
    console.log(values)
    const user = await supabaseClient.auth.getUser();
    const { amount } = values;
    const senderWallet = await supabaseClient.from('wallets').select('balance').eq('user_id', user.data.user.email).limit(1);
    // const receiverWallet = await supabaseClient.from('wallets').select('balance').eq('user_id', email).limit(1);
    const numAmount = parseFloat(amount);
    const balance = senderWallet?.data?.[0]?.balance ?? 0;
      // update sender balance
      await supabaseClient.from('wallets').update({
        'balance': balance + numAmount
      }).eq('user_id', user.data.user.email).then(async(v) => {
          createTransaction(
            user.data.user.email, amount, 'credit'
          );
          notification.success({
            message: "Funding Successful",
            description: `Your funding to is successful.`
          })
      })
  } catch (error) {
    notification.error({
      message: "Transfer Failed",
      description: error
    })
  }
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
    {
      key: '3',
      label: 'Fund',
      children:(
        <Form
          name="sendForms"
          layout="vertical"
          onFinish={onFund}
          initialValues={{ amount: ''}}
        >
          <Form.Item
            label="Fund Wallet"
            name="amount"
            rules={[{ required: true, amount: 'Please enter your amount!' }]}
          >
            <Input placeholder="Enter your amount" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Fund
            </Button>
          </Form.Item>
        </Form>
      )
    }
  ];

  return (
    <div className='px-10'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default SendNreceive