import {Task} from '@/model/User';
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';


type TaskCardProps = {
    task:Task;
};



const TimeElapsed = (task: { createdAt: Date }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  const calculateTimeElapsed = () => {
    const now = new Date();
    const createdAt = new Date(task.createdAt);
    const diff = now.getTime() - createdAt.getTime();
    const diffInHours = diff / (1000 * 60 * 60);
    const diffInDays = diff / (1000 * 60 * 60 * 24);

    if (diffInDays < 1) {
        setElapsedTime(`${Math.floor(diffInHours)} hr ago`);
    } else {
        setElapsedTime(`${Math.floor(diffInDays)} day ago`);
    }
};

  useEffect(() => {
  calculateTimeElapsed();
  }, [task.createdAt]);

  return (
    <span>{elapsedTime}</span>
  );
}
  

const TaskCard = ({task} :TaskCardProps) => {

return (
    <div>
        <Card className="w-[240px]">
          <CardHeader>
            {task.title && (
              <h2 className="font-sans font-normal text-[18px] leading-[21.4px] text-[#555555]">
                {task.title}
              </h2>
            )}
          </CardHeader>
          <CardContent className="space-y-1">
            {task.description && (
              <p className="font-sans font-light text-[14px] leading-[18.2px] text-[#797979]">
                {task.description}
              </p>
            )}
            {task.priority && (
              <p className={`inline-block px-2 py-1 rounded font-sans font-light text-[14px] leading-[18.2px] text-white
                ${task.priority === 'Urgent' 
                  ? 'bg-red-500' 
                  : (task.priority === 'Low' ? 'bg-green-500' : 'bg-yellow-500')
                }`}
              >
                {task.priority}
              </p>
            )}
            {task.deadline && (
              <p className="font-sans font-normal text-[18px] leading-[21.4px] text-[#555555]">
                {new Date(task.deadline).toDateString()}
              </p>
            )}
          </CardContent>
          <CardFooter>
            {task.createdAt && (
              <p className="font-sans font-normal text-[18px] leading-[21.4px] text-[#797979]">
                <TimeElapsed createdAt={task.createdAt} />
              </p>
            )}
          </CardFooter>
        </Card>
      </div>
  );
};

export default TaskCard
