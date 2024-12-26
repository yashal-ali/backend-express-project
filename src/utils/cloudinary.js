import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})

const uploadFileOnCloudinary= async (filepath)=>{
    try {
        if(!filepath) return null
        const response = await cloudinary.uploader.upload(filepath,{
            resource_type:"auto"
        })
        console.log('file is uploaded on cloudinary', response.url)
        return response
    }catch(err){
        fs.unlink(filepath)
        return null
    }
}

export {uploadFileOnCloudinary}