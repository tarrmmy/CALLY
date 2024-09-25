import React from 'react';
import { Card } from 'antd';


const Dashboard = () => {
  return (
    <div className='px-10'>
      <div className='flex'>
        <div className='w-3/4'>
          <Card
            style={{
              width: 700,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className='w-1/4'>
          <Card
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
      <div>
        <Card
          style={{
            width: 100,
          }}
        >
          
        </Card>
      </div>
    </div>
  )
}

export default Dashboard