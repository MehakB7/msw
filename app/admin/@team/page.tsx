import { wait } from '@/app/_lib'
import React from 'react'


const page = async() => {
  await wait(10000);
  return (
    <div className="p-6 max-w-sm mx-auto bg-pink-500 rounded-xl shadow-md flex items-center space-x-4 w-4/12">
       <div className="pt-8 text-base font-semibold">
          <p className="text-gray-900">Hey m Team</p>
      </div>
    </div>
  )
}



export default page