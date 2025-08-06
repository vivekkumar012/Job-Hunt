import { jobModel } from "../models/job.model.js";

export const postjob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        const userId = req.id;
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "All fields are required for post the job",
                success: false
            })
        }
        const job = await jobModel.create({
            title,
            description,
            requirements,
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })
        return res.status(201).json({
            message: "new Job Created successfully",
            success: true,
            job
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in postJob Controller",
            error: error.message
        })
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                {title: {$regex:keyword, $options:"i" }},
                {description: {$regex:keyword, $options:"i"}}
            ]
        };
        const jobs = await jobModel.find(query).populate({
            path: "company"
        }).sort({createdAt: -1});

        if(!jobs) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in getAllJob Controller",
            error: error.message
        })
    }
}

//for students/users
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await jobModel.findById(jobId);
        if(!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in getJobById Controller",
            error: error.message
        })
    }
}

//admin kitne  job create kiya abhi tak
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await jobModel.find({created_by: adminId})
        if(!jobs) {
            return res.status(403).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in getJobById Controller",
            error: error.message
        })
    }
}