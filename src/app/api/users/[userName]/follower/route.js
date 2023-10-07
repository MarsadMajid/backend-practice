import { NextResponse } from "next/server";
export const GET = (req , route) =>{
let al= {title:"GET"}

return NextResponse.json({data : route.params.userName})
}
export const POST = (req) =>{
    let title = new URL (req.url).searchParams.get('ali')
    return NextResponse.json({title})
    // ya trika query wala ha
    }
    export const  DELETE = async (req) =>{
        let body =  await req.json()
        return NextResponse.json({body})
        // ya trika query wala ha
        }