import {ReactNode} from 'react'

 export const metadata ={
    title : "Resume",
    description : "myresume"
 }


const Layout = ({children} : {children:ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}


export default Layout