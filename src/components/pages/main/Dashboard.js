import { React, useEffect } from 'react';
import { Table, Card } from 'antd';
import { where, query, getDocs } from "firebase/firestore";
import * as firebaseAuth from "firebase/auth";
import { auth, walletCollection } from "../../../firebaseConfig";
import authAtom from "../../atoms/auth.atom"
import { useRecoilValue } from 'recoil';


const Dashboard = () => {

  const authAtomValue = useRecoilValue(authAtom)
  const columns = [
    {
      title: 'Asset',
      dataIndex: 'name',
    },
    {
      title: '',
      dataIndex: 'age',
    },
    {
      title: '',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'LASUCoin',
      age: '# 521.30',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'CallyCoin',
      age: '# 201.12',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'LASUCoin',
      age: '# 680.22',
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'BitCoin',
      age: '# 730.44',
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Ethereum',
      age: '#2,834.18',
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'BitCoin Cash',
      age: '#730.44',
      address: 'Sydney No. 1 Lake Park',
    },
  ]; 

  const getWalletBalance = async () => {
    auth.updateCurrentUser();
    const user = authAtomValue.user.uid;
    // auth.
    console.log("User Data ::: ", user);
    const q = query(walletCollection, where('user_id', '==', user ?? ""));
    const snapshot = await getDocs(q);
    console.log(snapshot.data);
  }

  useEffect(() => {
    auth.authStateReady(async () => {
      const user = await auth.currentUser;
      if (user != undefined) {
        getWalletBalance();
      }
    })
  }, [])

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
            <p>{ auth.currentUser }</p>
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
      <div className='mt-4'>
      <Table columns={columns} dataSource={data} size="middle" />   
      </div>
    </div>
  )
}

export default Dashboard