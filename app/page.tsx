import { LoginButton } from '@/components/auth/login-button';
import {Button} from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins ({
  weight: ["600"],
  subsets: ["latin"]
})

export default function Home() {
  return (
   <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800'>
    <div className='space-y-6 text-center  gap-11'>
    <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
       🔐 AUTH
      </h1>
      <p className='text-white text-lg'>A simple authentication service</p>
      <div >
      <LoginButton route="/auth/login">
      <Button variant='secondary'>Login nativo</Button>
      </LoginButton>
      </div>
    </div>
   </main>
  );
}
