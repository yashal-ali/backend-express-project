// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (err) {
//     console.log("err", err);
//   }
// };

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => {
                console.error('Error:', err);
                next(err); // Forward the error to Express's error-handling middleware
            });
    };
};

export { asyncHandler };
