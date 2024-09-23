import React from 'react'
import { Link } from 'react-router-dom'
import { GoGear } from 'react-icons/go'
import { useRecoilValue } from 'recoil'
import { Avatar, Button, Dropdown, Form, Input } from 'antd'
import Logo from '../components/logo'
import { FaChevronDown } from 'react-icons/fa'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import authAtom from './atoms/auth.atom'
import searchIcon from '../images/icons/search.svg'
import messageIcon from '../images/icons/message.svg'
import bellIcon from '../images/icons/bell.svg'

export default function   Header({
  isOpen,
  onOpen,
}) {
  const { user } = useRecoilValue(authAtom)
  const items = [
    {
      key: 'profile',
      icon: <GoGear className='!text-base !font-medium' />,
      label: <Link to="" className='!text-sm !font-medium'>Edit Profile</Link>,
    },
    {
      key: 'logout',
      icon: <FiLogOut className='!text-base !font-medium' />,
      label: <Link to="/auth/logout" className='!text-sm !font-medium'>Logout</Link>,
    },
  ]
  return (
    <div className='w-full fixed top-0 left-0 right-0 z-10 shadow bg-white text-silver flex justify-between items-center py-3 px-5 md:px-10 lg:px-20'>
      <div className='flex items-center gap-1 md:hidden'>
        <Button onClick={onOpen} className='!bg-transparent' icon={<FiMenu className='text-2xl text-silver' />} type='text' size='large' />
        <Logo hidden={isOpen} className="!text-2xl" />
      </div>
      <div />
      <div className='flex items-center gap-3'>
        <Form>
          <Input prefix={<img alt='icon' src={searchIcon} />} placeholder='Search' size='large' />
        </Form>
        <Button size='large' className='!bg-transparent' type='text' icon={<img alt='icon' className='w-[25px]' src={messageIcon} />} />
        <Button size='large' className='!bg-transparent' type='text' icon={<img alt='icon' className='w-[25px]' src={bellIcon} />} />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div className='flex gap-3 items-center cursor-pointer'>
            <Avatar
              size={30}
              shape='circle'
              alt={user?.data?.name}
              src={user?.data?.imageUrl}
              style={{ backgroundColor: "#121212", verticalAlign: 'middle' }}
            >{user?.data?.name}</Avatar>
            <FaChevronDown className='!text-dark !text-xl !font-light' />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}