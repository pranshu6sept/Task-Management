import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"

export async function POST (request: Request) {
    await dbConnect()

    try {
        const {username,email,password} = await request.json();

        const existingUserByEmail = await UserModel.findOne({email})
        

        if (existingUserByEmail) {
            const hasedPassword = await bcrypt.hash(password,10);
            existingUserByEmail.password = hasedPassword;

            await existingUserByEmail.save();
    
        } else {
            const hasedPassword = await bcrypt.hash(password,10);
            const expityDate = new Date()
            expityDate.setHours(expityDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hasedPassword,
                tasks:[],
            })

            await newUser.save();
        }

        return Response.json({
            success:true,
            message:"User registered successfully"
        },{status:201})
        
    } catch (error) {
        console.log('Error Registering user', error);
        return Response.json(
            {
                success:false,
                message:"Error registering User"
            },
            {
                status:500
            }
        )
    }
}
