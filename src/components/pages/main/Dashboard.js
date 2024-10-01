import { React, useEffect, useState } from 'react';
import { Table, Card } from 'antd';
// import { where, query, getDocs } from "firebase/firestore";
// import * as firebaseAuth from "firebase/auth";
// import { auth, walletCollection } from "../../../firebaseConfig";
import authAtom from "../../atoms/auth.atom"
import { useRecoilValue } from 'recoil';
import { supabaseClient } from '../../../supabase.config';


const Dashboard = () => {

  const authAtomValue = useRecoilValue(authAtom)
  const columns = [
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Type',
      dataIndex: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
    },
    {
      title: 'Initiator',
      dataIndex: 'user_id',
    }
  ];

  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])

  const getWalletBalance = async () => {
    try {

      const user = await supabaseClient.auth.getUser();
      console.log(user, "user ::: ")
      const walletBalance = await supabaseClient
        .from("wallets")
        .select("balance")
        .eq('user_id', user?.data?.user?.email)
        .limit(1);
      console.log("User Balance ::: ", walletBalance)
      setBalance(walletBalance?.data[0]?.balance)
    } catch(error) {
      console.log("Error ", error)
    }
  }

  const loadTransactions = async () => {
    try {

      const user = await supabaseClient?.auth?.getUser();
      const transactions = await supabaseClient
        .from("transactions")
        .select("*")
        .eq('user_id', user?.data?.user.email)
        .order('created_at', {
          ascending: false
        })
        .limit(5);
        setTransactions(transactions.data ?? [])
    } catch(error) {
      console.log(
        "Error ", error       )
    }
  }

  useEffect(() => {
    getWalletBalance();
    loadTransactions();
  }, [])

  return (
    <div className='px-10'>
      <div className='flex'>
        <div className='w-1/4'>
          <Card
            style={{
              width: 700,
            }}
          >
            <h2>Wallet Balance </h2>
            <h1 className='text-3xl'>
              <span className='font-bold text-3xl mr-2'>{ balance }</span>
              MJB Coin
            </h1>
          </Card>
        </div>
        {/* <div className='w-1/4'>
          <Card
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div> */}
      </div>
      <div className='mt-4'>
      <Table title={() => "Recent Transactions"} columns={columns} dataSource={transactions} size="middle" />   
      </div>
    </div>
  )
}

export default Dashboard