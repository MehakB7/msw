import React from 'react'
import { projects } from './constant'
import Card from '@/commonComponents/Card/Card'

const page = () => {
  return (
    <div className='container m-auto'>
       <h1 className="inline-block mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white ml-4">Some Recent Work</h1>
       <div className="m-4 max-lg:m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {
          projects.map((item, index) => (
            <Card {...item} key={index} />
          ))
        }
       </div>
    </div>
  )
}

export default page