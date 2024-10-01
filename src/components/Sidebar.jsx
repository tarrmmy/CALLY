import React, { useMemo } from 'react'
import Logo from '../components/logo'
import { Drawer, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import dashboardIcon from '../images/icons/dashboard.svg'
import sendIcon from '../images/icons/send.svg'
// import walletIcon from '../images/icons/wallet.svg'
// import buyIcon from '../images/icons/buy.svg'
// import transactionIcon from '../images/icons/transaction.svg'
// import contactIcon from '../images/icons/contact.svg'

function Sidebar({
  isOpen,
  onClose,
}) {
  const { pathname } = useLocation()

  const items = useMemo(() => [
    {
        key: "/dashboard",
        label: <Link to="/main/dashboard">Dashboard</Link>,
        icon: <img alt='dashboard' src={dashboardIcon} />,
    },
    // {
    //     key: "/wallet",
    //     label: <Link to="/main/wallet">Wallet</Link>,
    //     icon: <img alt='wallet' src={walletIcon} />,
    // },
    {
        key: "/send-receive",
        label: <Link to="/main/send-receive">Send/Receive</Link>,
        icon: <img alt='sendreceive' src={sendIcon} />,
    },
    // {
    //     key: "/buy-sell",
    //     label: <Link to="/main/buy-sell">Buy/Sell</Link>,
    //     icon: <img alt='buysell' src={buyIcon} />,
    // },
    // {
    //     key: "/transaction",
    //     label: <Link to="/main/transaction">Transaction</Link>,
    //     icon: <img alt='transaction' src={transactionIcon} />,
    // },
    // {
    //     key: "/contact",
    //     label: <Link to="/main/contact">Contact</Link>,
    //     icon: <img alt='contact' src={contactIcon} />,
    // },
  ], []);

const Content = () => (<div className='w-full h-full overflow-y-auto md:p-5 lg:px-2 space-y-5'>
    <Logo className="!text-2xl !text-white" />
    <Menu
      style={{ border: 0, color: "#91B3E6", fontSize: "14px", fontWeight: "600", background: "transparent" }}
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[pathname]}
      mode="inline"
      items={items}
    />
  </div>)
  return (
    <div className='w-0 md:w-[20%] lg:w-[18%] z-20 bg-dark_blue border pt-20'>
      <Content />
      <Drawer
        width={270}
        placement="left"
        onClose={onClose}
        closable={false}
        open={isOpen}
      >
        <Content />
      </Drawer>
    </div>
  )
}

export default Sidebar