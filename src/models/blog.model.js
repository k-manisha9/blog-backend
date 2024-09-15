import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            index:true
        },
        description: {
            type: String,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        readTime: {
            type: Number,
            default: 1  
        },
        image: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        likeCount: {
            type: Number,
            default: 0
        },
        commentCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


export const Blog=mongoose.model("Blog",blogSchema)