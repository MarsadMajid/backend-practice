import { NextResponse } from "next/server";
export const GET = (req , route) =>{
let al= {title:"GET"}
return NextResponse.json({data : route.params.userName})
}
// ya trika params wala tarika ha