import React from 'react'
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';

const TaskBar = () => {
  return (
    <div className="flex flex-row gap-x-4 w-[1107px] h-[570px] rounded-[8px] p-[16px]">
        <div className='flex flex-row justify-between w-[256.75px] h-[24px]'>
            <p className='w-[124px] h-[24px] font-sans font-normal text=[20px] leading-[24.2px] text-[#555555]'>To do</p>
            <HorizontalSplitOutlinedIcon/>
        </div>
        <div className='flex flex-row justify-between w-[256.75px] h-[24px]'>
            <p className='w-[124px] h-[24px] font-sans font-normal text=[20px] leading-[24.2px] text-[#555555]'>In Progress</p>
            <HorizontalSplitOutlinedIcon/>
        </div>
        <div className='flex flex-row justify-between w-[256.75px] h-[24px]'>
            <p className='w-[124px] h-[24px] font-sans font-normal text=[20px] leading-[24.2px] text-[#555555]'>Under review</p>
            <HorizontalSplitOutlinedIcon/>
        </div>
        <div className='flex flex-row justify-between w-[256.75px] h-[24px]'>
            <p className='w-[124px] h-[24px] font-sans font-normal text=[20px] leading-[24.2px] text-[#555555]'>Finished</p>
            <HorizontalSplitOutlinedIcon/>
        </div>
    </div>
  )
}

export default TaskBar