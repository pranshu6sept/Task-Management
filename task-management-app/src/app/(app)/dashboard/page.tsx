'use client';

import NavBar from '@/components/NavBar'
import TaskBar from '@/components/TaskBar';
import ToDo from '@/components/ToDo'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[285px] h-[1024px] shadow-md border-r border-[#DEDEDE] flex justify-between p-[24px] pt-[16px] pb-[32px]'>
        <NavBar/>
    </div>
    <div>
    <div className='w-[1107px] h-[253px] mt-[24px] ml-[10px]'>
      <ToDo/>
    </div>
    <div className='w-[1107px] h-[253px] mt-[12px] ml-[10px]'>
      <TaskBar/>
    </div>
    </div>
    </div>
  )
}

export default page