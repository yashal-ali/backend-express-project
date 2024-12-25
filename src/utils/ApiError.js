class APiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors=[],
        statck=""
    ){
       super(message),
       this.statusCode=statusCode
       this.data=null,
       this.message=message,
       this.errors=errors,
       this.success=false
       if(statck){
        this.stack=statck
    } else{
        Error.captureStackTrace(this , this.constructor)
    }
    }
    
}

export {APiError}