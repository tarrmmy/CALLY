import { Skeleton, Spin } from 'antd'
import React from 'react'

export const LoadFrame = ({row, className}) => (<Skeleton round active loading paragraph={{ rows: row || 13 }} className={`w-full px-10 py-20 bg-white ${className}`} />) 

const Loading = () => (<Spin spinning className='w-full h-[90vh] bg-white flex justify-center items-center rounded-xl shadow-xl text-blue' size="large" />)
export default Loading