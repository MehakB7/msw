import React from "react";
import { ParticleContainer } from "@/commonComponents/ParticleContainer/ParticleContainer";
import Image from "next/image";
import { Links } from "./constant";
import Link from "next/link";
import { location } from "./icons";
import { lang } from "@/utils/lang";

const { name, profession, aboutMe, about, location: loc, greetings } = lang;

const Page = async () => {
  return (
    <>
      <ParticleContainer />
      <div className="container mx-auto mt-16 p-10 grid grid-cols-3 max-lg:grid-cols-2 max-lg:justify-center gap-5">
        <div className="flex flex-col justify-self-start items-center max-lg:col-span-2 max-lg:justify-center max-lg:w-full">
          <Image
            src="/images/profile.webp"
            alt="hero"
            width={256}
            height={300}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">{name}</h1>
            <p className="text-white">{profession}</p>
            <div className="flex items-center gap-1">
              {" "}
              {location}
              <span className="text-white">{loc}</span>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              {Links.map((link) => (
                <Link href={link.href} key={link.name} target="_blank">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full col-span-2">
          <div className="shadow-2xl shadow-cyan-500/50 p-8 flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold text-white border-b-2">
              {aboutMe}
            </h1>
            <p>{greetings}</p>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
