import React, { useMemo } from 'react'
import Logo from '../components/logo'
import { Drawer, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import dashboardIcon from '../images/dashboard.svg'

function Sidebar({
  isOpen,
  onClose,
}) {
  const { pathname } = useLocation()

  const items = useMemo(() => [
    {
        key: "/dashboard",
        label: <Link to="/dashboard">Dashboard</Link>,
        icon: <img alt='dashboard' src={dashboardIcon} />,
    },
    {
        key: "/wallet",
        label: <Link to="/wallet">Wallet</Link>,
        icon: <img alt='wallet' src={dashboardIcon} />,
    },
    {
        key: "/send-receive",
        label: <Link to="/send-receive">Send/Receive</Link>,
        icon: <img alt='sendreceive' src={dashboardIcon} />,
    },
    {
        key: "/buy-sell",
        label: <Link to="/buy-sell">Buy/Sell</Link>,
        icon: <img alt='buysell' src={dashboardIcon} />,
    },
    {
        key: "/transaction",
        label: <Link to="/transaction">Transaction</Link>,
        icon: <img alt='transaction' src={dashboardIcon} />,
    },
    {
        key: "/contact",
        label: <Link to="/contact">Contact</Link>,
        icon: <img alt='contact' src={dashboardIcon} />,
    },
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