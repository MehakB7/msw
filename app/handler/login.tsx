"use server";

import { cookies } from "next/headers";
import { LoginType } from "../(account)/login/type";

export const handler = async( data: LoginType)=>{
     console.log("data", data)
     cookies().set("auth", "true")
 
  }
 