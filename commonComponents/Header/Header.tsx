import Link from "next/link";
import React from "react";
import { paths,links } from "./constant";
import { DownloadIcon, Icon } from "@/app/(dashboard)/icons";
import { lang } from "@/utils/lang";

const Header = () => {
  return (
    <header className=" fixed text-white p-4 w-full h-16 bg-black top-0 z-10">
      <div className="container mx-auto flex items-center space-x-4 justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">{Icon}</Link>
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
        <div>
          <a className="flex border border-cyan-600 rounded-full px-3 py-2 items-center gap-1" download={lang.cv} href={links.cv}>
            <DownloadIcon className="w-6 h-6" />
            {lang.cv}
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
