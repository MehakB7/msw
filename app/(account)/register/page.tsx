import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import React from 'react'


const page = () => {

    const handleRequest = async(data : FormData)=>{
        "use server"
        cookies().set("source", "mehak");
        redirect("/")
        
    }


    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
           <div className="w-full max-w-xs flex justify-center items-center flex-col">
            <h1 className="text-xl font-medium text-black" data-cy="heading"> Welcome Back!</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            action={handleRequest}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                data-cy="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
                data-cy= "password"
               
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                data-cy="submit-button"
              >
                Sign In
              </button>
            </div>
            <button type="button" className="cta_cta__Y8_cx justify-center whitespace-nowrap rounded-[6px] border-2 border-[#ededed]/[0.12] font-mono font-semibold uppercase outline-none outline-offset-0 outline-[transparent] px-6 outline-[4px] bg-gray-1000 text-background-100 phover:[&amp;:not(:disabled)]:border-[#000] phover:[&amp;:not(:disabled)]:outline-[#ededed]/[0.24] flex h-auto w-full flex-col items-center py-4 text-2xl !outline-none lg:py-[1em] lg:text-xl 2xl:text-3xl hover:scale-[1.0] lg:!border-[rgba(230,230,230,0)] lg:!bg-[rgba(230,230,230,0)] lg:transition-transform lg:duration-300 lg:ease-[cubic-bezier(0.25,1,0.5,1)]"><span className="flex flex-col items-center font-sans normal-case !text-background-100"><span className="tracking-[-0.08rem]">Get Tickets</span><span className="text-[0.8em] tracking-[-0.06rem] opacity-50">In-person / Virtual</span></span></button>
          </form>
        </div>
        </div>
      )
}

page.propTypes = {}

export default page