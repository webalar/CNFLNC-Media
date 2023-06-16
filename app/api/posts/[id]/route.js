import Post from "@models/Post";
import connect from "@utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params;

    try {
        await connect()

        const post = await Post.findBy(id)

        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (err) {
        return new NextResponse("Databse Error!", { status: 500 }, err);
    }

}