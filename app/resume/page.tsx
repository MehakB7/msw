import React from "react";
import { resume } from "./constant";
import TimelineCard from "@/commonComponents/TimelineCard/timelineCard";
function page() {
  return (
    <div className="container m-auto">
      {resume.map((item, index) => (
        <div key={index} className="m-4">
          <div className="flex items-center gap-4">
          <h1 className="inline-block mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{item.title}</h1>
          {item.icon}
          </div>
          <div className="m-8">
          <ol className="relative border-s border-gray-200 dark:border-gray-700"> 
          {item.data.map((data, index)=>(
           <TimelineCard {...data} key={index} />
          )
        )}
         </ol>
         </div>
        </div>
      ))}
    </div>
  );
}

export default page;
