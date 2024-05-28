import React from 'react'


const loading = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-purple-400 rounded-xl shadow-md flex items-center space-x-4 w-4/12">
    <div className="pt-8 text-base font-semibold">
         <p className="text-white-900">loading dashboard</p>
     </div>
   </div>
  )
}

loading.propTypes = {}

export default loading