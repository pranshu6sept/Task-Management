import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";

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

    
    try {
        const userFound = await UserModel.findOne({ _id: user._id })

        if (!userFound){
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
                tasks: userFound.tasks
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