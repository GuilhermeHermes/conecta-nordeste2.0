import { signOut } from "@/auth"


export function SignOut() {
  return (
    <form action={async () =>{
      await signOut()
     }}>
      <button type="submit" className='p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2'>SignOut</button>
     </form>
  )
}