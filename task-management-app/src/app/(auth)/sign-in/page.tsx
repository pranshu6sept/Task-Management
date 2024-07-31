'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { signInSchema } from '@/schemas/signInSchema';

export default function SignInForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        toast({
          title: 'Login Failed',
          description: 'Incorrect username or password',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      }
    }

    if (result?.url) {
      router.replace('/dashboard');
    }
  };

  return (
    <div className="justify-center items-center min-h-screen bg-gradient-to-b from-custom-white to-custom-purple">
        <div className= "absolute w-[648px] h-[476px] top-[120px] left-[396px] rounded-2xl border gap-[32px] p-[60px] border-[#CECECE] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]">
            <div className="text-center">
            <h1 className="w-[528px] h-[58px] mb-[42px] font-sans font-semibold text-5xl text-center leading-[57.8px]">
                Welcome to <span className="text-[#4543AC]">Workflo!</span>
            </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[24px]">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Your email"
                    {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Input type="password" placeholder="Password"
                    {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[528px] h-[52px] rounded-[8px] border p-2 gap-[10px] shadow-inner bg-[#4C38C2] hover:bg-gradient-to-b from-[#4C38C2] to-[#2F2188]"
            >
                Login
            </Button>
              
            </div>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            Dont have an account? Create a{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              new account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}