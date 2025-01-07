import React from "react";
import { CardType } from "./type";
import Tag from "../Tag/Tag";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  image,
  link,
  tags,
  responsibility,
}: CardType) => {
  return (
    <Link href={link} target="_blank"  className="max-w-sm group bg-black rounded-lg shadow dark:bg-black-800 relative dark:border-black-700 shadow-md shadow-cyan-500/50 opacity-15 transition duration-300 ease-in-out transform hover:scale-110 ">
      <div>
        <Image
          className="rounded-t-lg"
          src={image}
          alt=""
          width={340}
          height={200}
        />

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {tags?.length && (
            <div className="flex gap-2 mt-4 flex-wrap">
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
        <div className="w-full h-full sm:absolute top-0 rounded-lg transform sm:scale-0 origin-bottom-right transition-all duration-300 ease-in-out sm:group-hover:scale-100 bg-black ">
          <div className="flex justify-center w-full h-full">
            <ul className="p-5 mx-4 list-disc">
              {responsibility.map((item, index) => (
                <li key={index} className="text-gray-200 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {};



export default Card;
