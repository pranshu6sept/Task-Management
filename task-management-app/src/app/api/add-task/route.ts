import dbConnect from "@/lib/dbConnect";
import TaskModel from "@/model/Task";

export async function POST (request: Request) {
    await dbConnect()

    try {

        const { title, description, status, priority, deadline } = await request.json();
        
        // Create a new task
        const task = new TaskModel({
          title,
          status,
          description,
          priority,
          deadline,
        });

        await task.save();
        
        return Response.json({
            success:true,
            message:"Task Saved successfully"
        },{status:201})

    } catch (error) {
        console.log('Error Adding Task', error);
        return Response.json(
            {
                success:false,
                message:"Error Adding Task"
            },
            {
                status:500
            }
        )   
    }
}