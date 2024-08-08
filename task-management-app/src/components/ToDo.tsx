'use client';

import React, { useState } from 'react'
import '../app/globals.css'
import Image from "next/image";
import img1 from "../../public/img1.png"
import img2 from "../../public/img2.png"
import img3 from "../../public/img3.png"
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Button } from './ui/button';
import AddTask from './AddTask';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useParams } from 'next/navigation';
import { Task } from '@/model/User';


type TaskCardProps = {
    task:Task;
};

const ToDo = () => {
    const params = useParams<{ username: string }>();
    const username = params.username;

    // const [tasks, setTasks] = useState<Task[] | null>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    

    // const filteredtasks = tasks?.filter(task =>
    //     task.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    function openModal() {
        setIsOpen(true);
    }

  return (
    <div>
    <div className="flex flex-col gap-y-4">
        <div className='flex flex-row w-[1107px] h-[58px] items-center justify-between'>
            <p className='w-auto h-[58px] font-sans font-semibold text-[48px] leading-[57.6px] text-[#080808]'>
                Good morning, {username}!
            </p>
            <div className='flex flex-row mr-1 items-center w-[170px] h-[24px]'>
                <p className='w-[135px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#080808]'>
                    Help & Feedback 
                </p>
                <HelpOutlineOutlinedIcon className='icon'/>
            </div>
        </div>
        <div className='flex items-center flex-row gap-x-2 w-[1107px] h-[123px]'>
            <div className='flex items-center justify-center w-[363.67px] h-[123px] rounded-[8px] border border-[#F4F4F4] bg-[#FFFFFF]'>
                <Image src={img1}
                       alt=""
                       className='w-[77px] h-[61px]'
                />
                <div className='flex mb-6 ml-2 justify-center flex-col'>
                <p className='w-[244.67] h-[19px] font-sans font-semibold text-[16px] leading-[19.36px] text=[#757575]'>
                    Introducing tags
                </p>
                <p className='w-[244.67] h-[19px] font-sans font-normal text-[14px] leading-[16.94px] text=[#868686]'>
                    Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.
                </p>
                </div>
            </div>
            <div className='flex items-center justify-center w-[363.67px] h-[123px] rounded-[8px] border border-[#F4F4F4] bg-[#FFFFFF]'>
                <Image src={img2}
                       alt=""
                       className='w-[76px] h-[50px]'
                />
                <div className='flex mb-6 ml-2 justify-center flex-col'>
                <p className='w-[244.67] h-[19px] font-sans font-semibold text-[16px] leading-[19.36px] text=[#757575]'>
                    Share Notes Instantly
                </p>
                <p className='w-[244.67] h-[19px] font-sans font-normal text-[14px] leading-[16.94px] text=[#868686]'>
                    Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.
                </p>
                </div>
            </div>
            <div className='flex items-center justify-center w-[363.67px] h-[123px] rounded-[8px] border border-[#F4F4F4] bg-[#FFFFFF]'>
                <Image src={img3}
                       alt=""
                       className='w-[76px] h-[70px]'
                />
                <div className='flex mb-6 ml-2 justify-center flex-col'>
                <p className='w-[244.67] h-[19px] font-sans font-semibold text-[16px] leading-[19.36px] text=[#757575]'>
                    Access Anywhere
                </p>
                <p className='w-[244.67] h-[19px] font-sans font-normal text-[14px] leading-[16.94px] text=[#868686]'>
                    Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.
                </p>
                </div>
            </div>
        </div>
        <div className='flex flex-row w-[1107px] h-[40px] justify-between'>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-[196px] h-[40px] rounded-[8px] items-center border border-[#E9E9E9] justify-between p-[8px]"
            />
            <span className='justify-center absolute ml-[167px] mt-[6px]'><SearchIcon/></span>
            <div className='flex flex-row'>
            <div className='flex flex-row w-[175px] h-[40px] justify-center items-center rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='w-[115px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                    Calendar View
                </p>
                <CalendarTodayOutlinedIcon className='icon ml-4'/>
            </div>
            <div className='ml-2 flex flex-row w-[141px] h-[40px] justify-center items-center rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='ml-4 w-[87px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                    Automation
                </p>
                <AutoAwesomeOutlinedIcon className='icon ml-3'/>
            </div>
            <div className='ml-2 flex flex-row justify-center items-center w-[92px] h-[40px] rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='ml-4 w-[38px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                    Filter
                </p>
                <FilterAltOutlinedIcon className='icon ml-5'/>
            </div>
            <div className='ml-2 flex flex-row justify-center items-center w-[98px] h-[40px] rounded-[4px] p-[8px] bg-[#F4F4F4]'>
                <p className='ml-4 w-[38px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#797979]'>
                    Share
                </p>
                <ShareOutlinedIcon className='icon ml-5'/>
            </div>
            <Button onClick={openModal} className="ml-2 w-[136px] h-[40px] rounded-[8px] border p-2 gap-[8px] shadow-inner bg-[#4B38C2] hover:bg-gradient-to-b from-[#4B38C2] to-[#2F2188]"
            >
                <p className='ml-3 w-[88px] h-[19px] font-sans font-medium text-[16px] leading-[19.36px] text-[#FFFFFF]'>Create new</p>
                <AddCircleRoundedIcon className='icon ml-1'/>
            </Button>
            </div>
        </div>
    </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
            </SheetTrigger>
            <SheetContent className="fixed inset-y-0 right-0 w-[670px] sm:max-w-md bg-white shadow-lg p-4">
                <AddTask />
            </SheetContent>
        </Sheet>
    </div>
  )

  
}

export default ToDo