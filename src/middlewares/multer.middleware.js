import multer from "multer"

const storage=multer.diskStorage({
    destination:function (req,file,callback){
        callback(null , "./pubic/temp")
    },
    filename:function(req,file,callback){
        const uniqueSuffix=Date.now()+ "-"+Math.round
        (Math.random() *1E9)
        callback(null , file.fieldname +"-" +uniqueSuffix)
    }
})

export const upload =multer({storage:storage})