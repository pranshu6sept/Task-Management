'use client';

import React from 'react'
import '../app/globals.css'
import { useRouter } from 'next/navigation';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

import { Button } from './ui/button';


const NavBar = () => {

    const router = useRouter();

    const handleClick = () => {
    const button = document.querySelector('.navigate-button');
    if (button) {
      button.classList.add('dissolve');
      setTimeout(() => {
        router.replace('/sign-in');
      }, 300); // Match the duration of the animation
    }
    };

  return (
    <div className='w-[285px] max-h-screen'>
        <div className="flex-grow w-[253px] h-[73px]">
            <div className="flex flex-row">
                <div className='h-[31px] w-[31px] rounded-lg'>
                    Img
                </div>
                <div className='h-[24px] w-[130px]'>
                    <p className='font-sans font-medium text-[20px] text-[#080808] leading-[24.2px]'>
                        Joe Gardner
                    </p>
                </div>
            </div>
            <div className='flex flex-row items-center h-[40px] w-[253px]'>
                <div className='h-[24px] w-[112px] flex space-x-3'>
                    <NotificationsNoneIcon/>
                    <LightModeIcon/>
                    <KeyboardDoubleArrowRightIcon/>
                </div>
                <button onClick={handleClick}
                    className='navigate-button ml-auto w-[69px] h-[40px] rounded-[4px] p-[8px] gap-[14px] bg-[#F4F4F4]'
                >
                    Logout
                </button>
            </div>
        </div>
        <div className="mt-3 w-[253px] h-[268px]">
            <div className="flex flex-col w-[253px] h-[200px] gap-y-1 items-start">
                <button className='btn'>
                    <HomeOutlinedIcon className='icon'/>
                    <p className='text'>Home</p>
                </button>
                <button className='btn1'>
                    <InsertChartOutlinedOutlinedIcon className='icon'/>
                    <p className='text'>Boards</p>
                </button>
                <button className='btn1'>
                    <SettingsOutlinedIcon className='icon'/>
                    <p className='text'>Settings</p>
                </button>
                <button className='btn1'>
                    <Groups2OutlinedIcon className='icon'/>
                    <p className='text'>Teams</p>
                </button>
                <button className='btn1'>
                    <AutoGraphOutlinedIcon className='icon'/>
                    <p className='text'>Analytics</p>
                </button>
            
            <Button className="w-[253px] h-[52px] rounded-[8px] border p-2 shadow-inner bg-[#4B36CC] hover:bg-gradient-to-b from-[#9C93D4] to-[#4B36CC]"
            >
                <p className='w-[156px] h-[24px] font-sans font-medium text-[20px] leading-[24.3px] text-[#FFFFFF]'>Create new task </p>
                <AddCircleRoundedIcon className='icon ml-1'/>
            </Button>
            </div>
        </div>
        <button className='mt-40 flex flex-row items-center justify-center gap-x-2 w-[253px] h-[61px] bg-[#F3F3F3]'>
            <ArrowDownwardOutlinedIcon className='w-auto h-[20px] top-[6.67px] left-[14.17px]'/>
            <div className='flex flex-col'>
                <p className='w-[189px] h-[24px] font-sans font-medium text-[20px] leading-[24.2px] text-[#666666]'>Download the app</p>
                <p className='w-[189px] h-[17px] font-sans font-normal text-[14px] leading-[16.94px] text-[#666666]'>Get the full experience</p>
            </div>
        </button>
    </div>
  )
}

export default NavBar