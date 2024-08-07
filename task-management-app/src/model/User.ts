import mongoose, { Schema, Document } from 'mongoose';

export type TaskStatus = "To Do" | "In Progress" | "Under review" | "Finished";



export interface Task extends Document {
  title: string;
  description?: string;
  status: TaskStatus
  priority?: 'Low' | 'Medium' | 'Urgent';
  deadline?: Date;
  createdAt : Date;
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
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
);



export interface User extends Document {
  username: string;
  email: string;
  password: string;
  tasks: Task[];
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  tasks: [TaskSchema]
},{
  timestamps: true,
}
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;