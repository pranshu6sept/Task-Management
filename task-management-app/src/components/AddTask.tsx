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


import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Separator } from './ui/separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { taskSchema } from '@/schemas/taskSchema';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { ApiResponse } from '@/types/ApiResponse'
import axios, { AxiosError } from 'axios'
import { useToast } from './ui/use-toast'
import { useParams } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from './ui/calendar';
import { ChevronRight } from "lucide-react"
import { Input } from './ui/input';



const AddTask = () => {

  const params = useParams<{ username: string }>();
  const username = params.username;

  
  // const [date, setDate] = React.useState<Date>()
  const { toast } = useToast()

  const form =  useForm<z.infer<typeof taskSchema>>({
    resolver:zodResolver(taskSchema)});

  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit = form.handleSubmit(async (data :z.infer<typeof taskSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>('/api/add-task', {
        ...data,
        username,
      });

      toast({
        title: response.data.message,
        variant: 'default',
      });
      form.reset({ ...form.getValues()});
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: 'Error',
        description:
          axiosError.response?.data.message ?? 'Failed to add task',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  });


  return (
    <div>
      <Form {...form}>
      <form onSubmit={onSubmit}>
      <div className="flex flex-col w-[670px] h-[495px] top-[16px] gap-[16px]">
          <div className='flex ml-3 w-[622px] h-[40px]'>
          <Button type="submit" onClick={onSubmit} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
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
              
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                  <FormItem>
                  <FormControl>
                  <Input
                  placeholder="Title"
                  {...field}
                  className='ml-3 w-[400px] h-[50px]'
                  />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
                )}
                />
              <div className='mt-4 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <LightModeIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Status
                  </p>
                  <div className='ml-12'>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (    
                  <FormItem>
                       <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Not Selected" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="To Do">To Do</SelectItem>
                              <SelectItem value="In Progress">In Progress</SelectItem>
                              <SelectItem value="Under review">Under Review</SelectItem>
                              <SelectItem value="Finished">Finished</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    <FormMessage />
                  </FormItem>
              )}
              />
              </div>
              </div>
              <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <ErrorOutlineOutlinedIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Priority
                  </p>
                  <div className='ml-12'>
                  <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                  <FormItem>
                       <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Not Selected" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Priority</SelectLabel>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Urgent">Urgent</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    <FormMessage />
                  </FormItem>
              )}
              />  
              </div>
            </div>
              <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
                <CalendarTodayOutlinedIcon className='icon ml-5'/>  
                  <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                          Deadline
                  </p>
                  <div className='ml-12'>
                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[140px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "dd/MM/yyyy") : <span>Pick a date</span>}
                          <CalendarIcon className="mr-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          {...field}
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                      <FormMessage />
                    </FormItem>
          )}
        />
        </div>
        </div>
            <div className='mt-6 flex flex-row justify-center items-center w-[280px] h-[24px]'>
              <CreateOutlinedIcon className='icon ml-5'/>  
                <p className='w-[49px] h-[19px] font-sans font-normal text-[16px] leading-[19.36px] text-[#666666]'>
                        Description
                </p>
                <div className='ml-12'>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                  <FormItem>
                  <FormControl>
                  <Input
                    type="text"
                    placeholder="Description"
                    {...field}
                    className='w-[140px]'
                  />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
                )}
                />
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
      </form>
      </Form> 
    </div>
  )
}

export default AddTask