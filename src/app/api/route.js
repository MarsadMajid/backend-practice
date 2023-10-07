import { NextResponse } from "next/server";
export const GET = () =>{
let al= {title:"GET"}
return NextResponse.json(al)
}
export const POST =() =>{
    console.log("POST")
    return  NextResponse.json({message:"ham chutia"});
}
export const DELETE =() =>{
    console.log("DELETE")
    return  NextResponse.json({message:"ham chutia"});
}
export const PUT =() =>{
    console.log("PUT")
    return  NextResponse.json({message:"ham chutia"});
}