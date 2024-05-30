import Link from 'next/link';
import React from 'react'
import { paths } from './constant';
import { Icon } from '@/app/(dashboard)/icons';


const Header = () => {
    return (
        <header className=" text-white p-4">
          <div className="container mx-auto flex items-center space-x-4 p-4">
            <div className="text-2xl font-bold">
              <Link href="/">
              {Icon}
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-4">
                {paths.map((path, index) => (
                  <li key={index}>
                    <Link href={path.link} className="hover:text-gray-400">
                      {path.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      );-4
  
}

Header.propTypes = {}

export default Header