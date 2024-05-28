import React, { ReactNode } from 'react'

const layout = ({children, dashboard, team}: {children: ReactNode, dashboard: ReactNode, team: ReactNode}) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        {children}
    <div className='grid grid-cols-2 gap-2'>
    {dashboard}
        {team}
    </div>    
        
    </div>
  )
}


export default layout