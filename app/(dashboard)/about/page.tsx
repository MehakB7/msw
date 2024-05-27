import { wait } from '@/app/_lib'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    await  wait(300000)
  return (
    <>
    <Link href="/">Home</Link>
    <div>About</div>
    </>
  )
}

export default page