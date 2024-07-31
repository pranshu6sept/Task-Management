import { Task } from "@/model/Task";

export interface ApiResponse{
    success: boolean;
    message:string
    tasks?: Array<Task>
}
