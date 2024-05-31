import {ReactNode} from 'react'

 export const metadata ={
    title : "Projects",
    description : "my projects"
 }


const Layout = ({children} : {children:ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}


export default Layout