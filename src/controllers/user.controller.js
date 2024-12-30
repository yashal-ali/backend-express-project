import { asyncHandler} from "./../utils/asyncHandler.js";
import{ ApiError }from "./../utils/ApiError.js"
import {User} from "./../models/user.model.js"
import { ApiResponse } from "../utils/ApiResonse.js";

const registerUser =asyncHandler(async (req,res) => {
    const {fullName , userName , email ,password}=req.body
    if ([fullName,userName,email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All field are requried")
        
    }
    const existingUser=User.findOne({
        $or :[{email} , {userName}]
    })
    if(existingUser){
        throw new ApiError (409 , "User alreading registered")
    }
    const avatarLocal=req.files?.avatar[0]?.path
    const coverImageLocal=req.files?.coverImage[0]?.path
    if(!avatarLocal){
        throw new ApiError (400 , "Avatar file is required")
    }
    const user = await User.create ({
        fullName,
        avatar:avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        userName:userName.toLowerCase()
    })
    const createedUser= await User.findById(user._id).select(
        "-password -refreshTOken",
    )
    if (!createedUser){
        throw new ApiError(500, "Internal Server Error ")
    }

    return res.status(201).json(
        new ApiResponse(200 , createedUser , "User registered sucessfully")
    )    
})
export {
    registerUser
}