import { Task } from "@/model/User";


export interface ApiResponse{
    success: boolean;
    message:string
    tasks?: Array<Task>
}
