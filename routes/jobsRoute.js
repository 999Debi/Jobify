import expres from "express";
import { Router } from "express";
import authenticateUser from "../middleware/authenticateUser.js";

import { createJob,updateJob,getAllJobs,showStats,deleteJob } from "../controler/jobsControler.js";
const router = Router();

router.route("/").post(createJob).get(getAllJobs);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;