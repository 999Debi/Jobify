import expres from "express"
import { Router } from "express"

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import authenticateUser from '../middleware/authenticateUser.js'

import {register,login,updateUser,getCurrentUser, logout} from "../controler/authControler.js"
const router=Router();

router.route("/register").post(apiLimiter,register);
router.route("/login").post(apiLimiter,login);
router.route("/logout").post(logout);

router.route("/updateUser").patch(authenticateUser,updateUser);

router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
export default router;
