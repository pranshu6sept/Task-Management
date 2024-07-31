import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function GET(request:Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)
    const user: User = session?.user as User

    if (!session || !session.user){
        return Response.json(
            {
                success:false,
                message:"Not Authenticated"
            },
            {
                status:401
            }
        )
    }

    const userId = new mongoose.Types.ObjectId(user.id)
    try {
        const user = await UserModel.aggregate([
            { $match: {_id: userId}},
            { $unwind:'$tasks'},
            { $sort : {'tasks.createdAt': -1}},
            { $group :{_id:'$_id',tasks:{$push:'$tasks'}}},
        ])
        if (!user || user.length === 0){
            return Response.json(
                {
                    success:false,
                    message:"User not found"
                },
                {
                    status:404
                }
            )
        }

        return Response.json(
            {
                success:true,
                messages: user[0].tasks
            },
            {
                status:200
            }
        )
    } catch (error) {
        console.log("An unexcepted error occured", error)
        return Response.json(
            {
                success:false,
                message:"Error in getting tasks"
            },
            {
                status:500
            }
        )
        
    }
}