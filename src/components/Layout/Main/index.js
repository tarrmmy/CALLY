import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/header'
// import { useGetProfile } from '../../hooks/profile/profile'

const MainLayout = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
//   useGetProfile()
  return (
    <div className='w-full h-screen flex bg-white'>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div id='main_layout' className='w-full md:w-[80%] lg:w-[82%] relative h-full overflow-y-auto'>
        <Header isOpen={isOpen} onOpen={onOpen} />
        <div className='pt-20'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout