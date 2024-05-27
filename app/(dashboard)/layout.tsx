import {ReactNode} from 'react'

 export const metadata ={
    title : "Home",
    description : "Learn Next-js 14"
 }


const Layout = ({children} : {children:ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}


export default Layout