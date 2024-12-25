// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (err) {
//     console.log("err", err);
//   }
// };

const asynHandler= (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{
            console.log('err', err)
            err.next
        })
    }
}