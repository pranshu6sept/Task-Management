import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { User } from "next-auth";
import UserModel from "@/model/User";

export async function POST(request: Request) {
    await dbConnect();
    
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
        const { title, description,status,priority,deadline} = await request.json();
        
        // Find the user and update their tasks array
        const updatedUser = await UserModel.findByIdAndUpdate(
            user._id,
            { 
                $push: { 
                    tasks: { title, description, status,priority,deadline, createdAt: new Date() } 
                } 
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return Response.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { success: true, message: "Task added successfully" },
            { status: 200 }
        );
      
    } catch (error) {
      console.error('Error adding Task:', error);
      return Response.json(
        { message: 'Internal server error', success: false },
        { status: 500 }
      );
    }
  }