import React from "react";
import { TimeLineCardType } from "./type";
import Image from "next/image";
import Tag from "../Tag/Tag";

const TimelineCard = ({
  duration,
  title,
  company,
  location: loc,
  image,
  skills,
}: TimeLineCardType) => {
  return (
    <li className="mb-10 ms-10">
      <span className="bg-black absolute flex items-center justify-center w-10 h-10 bg-black-100 rounded-full left-[-20px] ring-2 ring-white dark:ring-cyan-600 dark:bg-black-900">
        <Image src={image} alt={company} width={24} height={24} />
      </span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{company}</p>
      <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
        {loc}
      </p>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {duration}
      </time>
      {skills?.length && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>
      )}
    </li>
  );
};

export default TimelineCard;
