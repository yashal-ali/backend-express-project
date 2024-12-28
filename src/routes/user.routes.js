import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";

const userRouter=Router()
userRouter.route('/register').post(registerUser)


export default  userRouter