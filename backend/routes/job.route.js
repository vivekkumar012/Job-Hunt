import express from 'express';
import { getAdminJobs, getAllJobs, getJobById, postjob } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const jobRouter = express.Router();

jobRouter.post("/post", isAuthenticated, postjob);
jobRouter.get("/get", isAuthenticated, getAllJobs);
jobRouter.get("/getadminjobs", isAuthenticated, getAdminJobs);
jobRouter.get("/get/:id", isAuthenticated, getJobById);

export default jobRouter;