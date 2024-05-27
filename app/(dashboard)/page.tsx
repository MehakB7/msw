import React from 'react'
import { wait } from '@/app/_lib'
import Link from 'next/link';

 const Page = async() => {
  await wait(100000);
  return (
    <>
    <Link href="/about">About</Link>
    <div>page1</div>
    </>
  )
}

export default Page;

