import React, { useState } from 'react'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Separator } from './ui/separator';



const AddTask = () => {

  const [title, setTitle] = useState('');
  

  return (
    <div>
      <div className="flex flex-col w-[670px] h-[495px] top-[16px] gap-[16px]">
          <div className='flex flex-row w-[622px] h-[40px]'>
            <div className='ml-2 flex flex-row justify-center items-center w-[98px] h-[40px] rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='ml-4 w-[38px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                        Share
                </p>
                <ShareOutlinedIcon className='icon ml-5'/>
            </div>
            <div className='ml-2 flex flex-row justify-center items-center w-[116px] h-[40px] rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='ml-4 w-[38px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                      Favorite
                </p>
                <StarBorderPurple500OutlinedIcon className='icon ml-8'/>
            </div>
          </div>
          <div className='w-[622px] h-[344px]'>
            <div className='w-[622px] h-[282px]'>
              <Input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-[420px] h-[58px] items-center justify-between font-semibold text-[48px] leading-[57.6px] text-[#CCCCCC]"
              />
              <div className='mt-4 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <LightModeIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Status
                  </p>
                  <div className='ml-12'>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Not Selected"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="progress">In Progress</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="finished">Finished</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  </div>
              </div>
              <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <ErrorOutlineOutlinedIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Status
                  </p>
                  <div className='ml-12'>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Not Selected"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  </div>
              </div>
              <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <CalendarTodayOutlinedIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Deadline
                  </p>
                  <div className='ml-12'>
                  <Input type="date" className='w-[140px]' />
                  </div>
              </div>
              <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <CreateOutlinedIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Description
                  </p>
                  <div className='ml-12'>
                  <Input type="text" className='w-[140px]' placeholder='Not Selected' />
                  </div>
              </div>
              <div className='mt-6 flex items-center h-[24px]'>
                <AddOutlinedIcon className='icon ml-5'/>  
                  <p className='ml-1 w-[161px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-black'>
                          Add custom property
                  </p>
              </div>
          </div>
          <Separator className="my-8" />
          <input type="text" 
                 className='w-[622px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px]
                text-[#C0BDBD]'
                placeholder='Start writing or drag your own files here'
          />
                    
          </div>
      </div>
    </div>
  )
}

export default AddTask