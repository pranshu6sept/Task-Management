import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";


export async function PATCH(request:Request,{params}: {params:{taskid:string}}) {
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

        const { title, description, status, priority, deadline } = await request.json();

        const updateResult = await UserModel.updateOne(
            {_id:user._id},
            {
                title,
                description,
                status,
                priority,
                deadline
            },
            { new:true }
        )
        if(updateResult.modifiedCount === 0){
            return Response.json(
                {
                    success:false,
                    message:"Task not found"
                },
                {
                    status:404
                }
            )
        }
        return Response.json(
            {
                success:true,
                message:"Task updated"
            },
            {
                status:200
            }
        )
    } catch (error) {
        return Response.json(
            {
                success:false,
                message:"Error updated task"
            },
            {
                status:500
            }
        )
    }
}