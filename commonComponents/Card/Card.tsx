import React from "react";
import { CardType } from "./type";
import Tag from "../Tag/Tag";

const Card = ({ title, description, image, link, tags }: CardType) => {
  return (
    <div className="max-w-sm bg-black rounded-lg shadow dark:bg-black-800 dark:border-black-700 shadow-md shadow-cyan-500/50 opacity-15 transition duration-300 ease-in-out transform hover:scale-110 ">
      <a href={link}>
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
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
    </div>
  );
};

Card.propTypes = {};

export default Card;
