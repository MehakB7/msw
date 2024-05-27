export const wait  = async(time)=>{
    return new Promise((resolve, reject)=> setTimeout(resolve(), time));
}