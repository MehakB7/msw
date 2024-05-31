import {ReactNode} from 'react'

 export const metadata ={
    title : "Mehak",
    description : "Mehak's portfolio"
 }


const Layout = ({children} : {children:ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}


export default Layout