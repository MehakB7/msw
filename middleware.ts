import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest)=>{
      if(request.nextUrl.pathname == "/admin" && !request.cookies.get("auth"))
      return NextResponse.redirect(new URL('/login', request.url))

      if(request.nextUrl.pathname == "/login" && request.cookies.get("auth")){
            return NextResponse.redirect(new URL('/admin', request.url))
      }

}