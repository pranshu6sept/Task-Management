'use-client'

import React, { useEffect, useState } from 'react'
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import TaskCard from './TaskCard';
import { Task, TaskStatus} from '@/model/User';
import axios from 'axios';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import AddTask from './AddTask';


const TaskBar = () => {

  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        // Function to fetch tasks from the API
        const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/get-tasks');
            if (response.data.success) {
              setTasks(response.data.tasks || []);
            } else {
              setError(response.data.message || 'Failed to fetch tasks');
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setError('Failed to fetch tasks. Please try again later.');
          } finally {
            setLoading(false);
          }
        };

        // Call the function to fetch tasks
        fetchTasks();
    }, []);
    // Empty dependency array means this effect runs once when the component mounts


    


    const getTasksByStatus = (status: TaskStatus) => {
        const filteredTasks = tasks?.filter(task => task.status === status) || [];
        return filteredTasks;
    };

    
      const renderTaskList = (status: TaskStatus) => (
        <div className="flex flex-col gap-y-2 mt-2">
          {getTasksByStatus(status).map(task => (
            <div key={task.id} className=''>
            <TaskCard task={task} />
            </div>
          ))}
        </div>
      );

      if (loading) {
        return <div className="text-center py-4">Loading tasks...</div>;
      }
    
      if (error) {
        return <div className="text-center py-4 text-red-500">{error}</div>;
      }
    
      if (!tasks || tasks.length === 0) {
        return <div className="text-center py-4">No tasks found.</div>;
      }

  return (
    <div>
    <div className="flex flex-row gap-x-4 rounded-[8px] p-[16px]">
        {['To Do', 'In Progress', 'Under review', 'Finished'].map(status => (
        <div key= {status} className='flex-1 flex flex-col'>
            <div className='flex flex-row items-center mb-2'>
            <h1 className='flex-grow font-sans font-normal text-[20px] leading-[24.2px] text-[#555555]'>{status}</h1>
            <HorizontalSplitOutlinedIcon/>
            </div>
            {renderTaskList(status as TaskStatus)}
            <Button onClick={openModal} className="ml-2 mt-2 w-[230px] h-[40px] rounded-[8px] border p-2 gap-[8px] shadow-inner bg-[#141212] hover:bg-gradient-to-b from-[#14112] to-[#9c9ba4]"
            >
                <p className='ml-3 w-[88px] h-[19px] font-sans font-medium text-[16px] leading-[19.36px] text-[#FFFFFF]'>Create new</p>
                <AddCircleRoundedIcon className='icon ml-1'/>
            </Button>
        </div>
        ))}
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

export default TaskBar
