import { NextResponse } from "next/server";
var post =[
    {
        id:"1",
        title:"My first blog",
        content:"This is my first blog"
    },
    {
        id:"2",
        title:"My second blog",
        content:"This is my second blog"
    }
]

export const GET = () =>{
return NextResponse.json(post)
}
export const POST = async (req) =>{
    // data send through body
const body = await req.json()
post.push(body)
return NextResponse.json({messsage: "post done"})
}
export const DELETE = (req) =>{
    const id =new URL (req.url).searchParams.get('id')
    post = post.filter((post)=>post.id !=id)
    return NextResponse.json({messsage: "delete done"})
}
export const PUT = async (req) =>{
const body = await req.json()
    post = post.map((post)=>{
        if (post.id==body.id){
            return body
        }
        else{
            return post;
        }
    }) 

}