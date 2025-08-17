import {z} from "zod";

export const registerSchema = z.object({
    email: z.string().email({message:"Please enter a valid email"}).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    password: z.string().min(3, {message:"Password must be at least 3 characters long"}),
})

export const loginSchema = z.object({
    email: z.string().email({message:"Please enter a valid email"}).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    password: z.string().min(3, {message:"Password must be at least 3 characters long"}),
})

export type registerSchemaType = z.infer<typeof registerSchema>
export type loginSchemaType = z.infer<typeof loginSchema>