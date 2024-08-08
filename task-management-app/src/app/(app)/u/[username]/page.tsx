'use client';

import NavBar from '@/components/NavBar'
import TaskBar from '@/components/TaskBar';
import ToDo from '@/components/ToDo'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row h-auto'>
    <div className='w-[285px] shadow-md border-r border-[#DEDEDE] justify-between pl-[24px] pt-[16px] pb-[32px]'>
        <NavBar/>
    </div>
    <div>
    <div className='w-[1107px] h-[253px] mt-[24px] ml-[10px]'>
      <ToDo/>
    </div>
    <div className='w-[1107px] h-auto mt-[12px] ml-[10px]'>
      <TaskBar/>
    </div>
    </div>
    </div>
  )
}

export default page