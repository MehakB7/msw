import {http, HttpResponse} from "msw";

interface LoginRequestBody {
    email: string;
    password: string;
  }
  
  interface LoginResponseBody {
    token: string,
    expiresIn: number;
    isEnabled: boolean;
    isLocked: boolean,
  }


export const handlers = [
    http.post<LoginRequestBody, LoginRequestBody>("*/api/signin", async({request})=> {
        const requestBody=  await request.json();
        if(requestBody?.email === "mehak@yopmail.com" && requestBody?.password === "123456"){
        return HttpResponse.json({
            status: 200,
            data: {
              email: 'test@example.com',
              first_name: 'admin',
              last_name: 'test',
              token: 'some-token',
            },
            message: 'User logged in successfully.',
          });
        }
        return new HttpResponse(null, HttpResponse.json({
            status: 400,
            message: 'Invalid credentials.',
        }))
         
    }),

    


    http.get("*/api/todo", ()=>{
        return HttpResponse.json({name:"mehak"})
    })


]