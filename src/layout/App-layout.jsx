import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
         <main className='flex-1 w-full max-w-5xl mx-auto px-4 py-6'>
            {/* header */}
            {/* body */}
            <Header/>
            <Outlet/>
         </main>
         {/* footer */}
         <div className="p-10 text-center bg-gray-800 mt-10">
            Made with ❤️ by Harsh Shrivastava
         </div>
    </div>
  )
}

export default AppLayout