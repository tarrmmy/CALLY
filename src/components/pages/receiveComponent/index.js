import React, { useEffect, useState } from 'react';
import { Button, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import CopyButton from '../../resusable component/CopyButton';
import { supabaseClient } from '../../../supabase.config';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const Receive = () => {
  const [data, setData] = useState(
    [
        {
            "title": "Wallet Address",
            "value": "0x1337bEaTa45bFA88Dc9C6CFeB6e0BAAEdCD6eCdA",
            "id" :"1"
        },
        {
            "title": "Email",
            "value": "---",
            "id" :"2"
        }
    ]
  );
  
  useEffect(() => {
    loadUserDetail();
  }, [])
  const loadUserDetail = async () => {
    const user = await supabaseClient.auth.getUser();
    setData( [
      {
          "title": "Wallet Address",
          "value": "0x1337bEaTa45bFA88Dc9C6CFeB6e0BAAEdCD6eCdA",
          "id" :"1"
      },
      {
          "title": "Email",
          "value": user.data.user.email,
          "id" :"2"
      }
  ])
  }

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id"
        // onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
            //   avatar={<Avatar src={item.picture.large} />}
              title={<p>{item.title}</p>}
              description={item.value}
            />
            <CopyButton  />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default Receive;