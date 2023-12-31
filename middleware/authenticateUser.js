import { UnAuthenticatedError } from "../errors/index.js";
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  // check header
  // const authHeader = req.headers.authorization;
  // if (!authHeader || !authHeader.startsWith('Bearer')) {
  //   console.log(req.headers);
  //   throw new UnAuthenticatedError("Authentication invalid");
  // }
  // const token = authHeader.split(' ')[1];





   const token = req.cookies.token;
   if (!token) {
     throw new UnAuthenticatedError("Authentication Invalid");
   }


   

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

export default auth;
