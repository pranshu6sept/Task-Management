'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { useDebounceCallback } from "usehooks-ts"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { ApiResponse } from "@/types/ApiResponse"
import { signUpSchema } from "@/schemas/signUpSchema"
import axios, { AxiosError } from "axios"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const page = () => {

    const [username,setUsername] = useState('')
    const [isCheckingUsername, setIsCheckingUsername] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const debounced = useDebounceCallback(setUsername, 500)
    const { toast } = useToast()
    const router = useRouter();

    // zod implementation

    const form =  useForm<z.infer<typeof signUpSchema>>({
      resolver:zodResolver(signUpSchema),
      defaultValues:{
        username:'',
        email:'',
        password:''
      }
    })

   useEffect(() => {
    const checkUsernameUnique = async () => {
      if(username) {
        setIsCheckingUsername(true)
        try {
          const response = await axios.get(`/api/check-username-unique?username=${username}`)
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          axiosError.response?.data.message ?? "Error Checking Username"
        } finally {
          setIsCheckingUsername(false)
        }
      }
    }
    checkUsernameUnique()
   } , [username])

   const onSubmit = async (data :z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post<ApiResponse>('/api/sign-up', data)
      toast({
        title: 'Success',
        description:response.data.message
      })
      router.replace(`/sign-in`)
      setIsSubmitting(false)
   } catch  (error){
      console.error("Error in signup of user", Error)
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMesage = axiosError.response?.data.message ?? "Error Checking Username"
      toast({
        title: 'Sign up failed',
        description: errorMesage,
        variant:"destructive"
      })
      setIsSubmitting(false)
   }
   }


  return (
    <div className="justify-center items-center min-h-screen bg-gradient-to-b from-custom-white to-custom-purple">
      <div className= "absolute w-[648px] h-[476px] top-[120px] left-[396px] rounded-2xl border gap-[32px] p-[60px] border-[#CECECE] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]">
        <div className="text-center">
          <h1 className="w-[528px] h-[58px] mb-[22px] font-sans font-semibold text-5xl text-center leading-[57.8px]">
            Welcome to <span className="text-[#4543AC]">Workflo!</span>
          </h1>
        </div>
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[22px]">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                      <FormControl>
                        <Input placeholder="Full name" 
                              {...field}
                              onChange={(e) => {
                                field.onChange(e)
                                debounced(e.target.value)
                              }}
                      />
                    </FormControl>
                    {isCheckingUsername && <Loader2 className="mr-2 h-4 w-4 animate-spin"/> }
                    <FormMessage />
                  </FormItem>
              )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                      <FormControl>
                        <Input placeholder="Your email" 
                              {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
              />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Password" 
                              {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
              />
              <Button type="submit" disabled={isSubmitting}
                        className="w-[528px] h-[52px] rounded-[8px] border p-2 gap-[10px] shadow-inner bg-[#4C38C2] hover:bg-gradient-to-b from-[#4C38C2] to-[#2F2188]"
              >
                {
                  isSubmitting ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                    </>
                  ) : ('Sign up')
                }
              </Button>
              </div>
            </form>
          </Form>
        
          <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
                Log in
              </Link>
            </p>
          </div>
          </div>
    </div>
  )
}

export default page