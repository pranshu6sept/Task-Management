import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";


export async function DELETE(request:Request,{params}: {params:{taskid:string}}) {
    const taskId = params.taskid
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
        const updateResult = await UserModel.updateOne(
            {_id:user._id},
            {
                $pull:{
                    tasks:{
                        _id:taskId
                    }
                }
            }
        )
        if(updateResult.modifiedCount === 0){
            return Response.json(
                {
                    success:false,
                    message:"Task not found or already deleted"
                },
                {
                    status:404
                }
            )
        }
        return Response.json(
            {
                success:true,
                message:"Task deleted"
            },
            {
                status:200
            }
        )
    } catch (error) {
        return Response.json(
            {
                success:false,
                message:"Error deleteing task"
            },
            {
                status:500
            }
        )
    }
}