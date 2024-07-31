import mongoose, { Schema, Document } from 'mongoose';


export interface Task extends Document {
    title: string;
    description?: string;
    status: 'To Do' |'In Progress' | 'Under review' | 'Finished';
    priority?: 'Low' | 'Medium' | 'Urgent';
    deadline?: Date;
}

export const TaskSchema: Schema<Task> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        enum: ['To Do','In Progress','Under review','Finished'],
        required: true,
      },
      priority: {
        type: String,
        enum: ['Low', 'Medium', 'Urgent'],
        required: false,
      },
      deadline: {
        type: Date,
        required: false,
      },
    }, {
      timestamps: true,
});

const TaskModel =
  (mongoose.models.User as mongoose.Model<Task>) ||
  mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;