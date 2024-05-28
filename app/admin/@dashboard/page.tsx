import { wait } from '@/app/_lib'
import React from 'react'

const page = async() => {
  await wait(5000);
   throw Error('Don;t render dashboard page')
  return (
    <div className="p-6 max-w-sm mx-auto bg-purple-600 rounded-xl shadow-md flex items-center space-x-4 w-4/12">
    <div className="pt-8 text-base font-semibold">
         <p className="text-white-900">Hey m Dashboard</p>
     </div>
   </div>
  )
}



export default page