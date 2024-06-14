import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request){
    console.log("test >>>");

    const res = await request.json()
    const {id} = res;
    console.log("ID >>>",res)

    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}
