import { applicationModel } from "../models/application.model.js";
import { jobModel } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "JobId is required",
                status: false
            })
        }
        //check if user is applied before or not
        const existingApplication = await applicationModel.findOne({
            job: jobId,
            applicants: userId
        })
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            })
        }
        //check if the job exist
        const job = await jobModel.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        //create new application
        const newApplication = await applicationModel.create({
            job: jobId,
            applicants: userId
        });
        jobModel.applications.push(newApplication._id);
        await jobModel.save();
        return res.status(201).json({
            message: "Job applied successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in applyJob Controller",
            error: error.message
        })
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const applications = await applicationModel.find({
            applicants: userId
        }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } }
            }
        })
        if (!applications) {
            return res.status(404).json({
                message: "No applications",
                success: false
            })
        }
        return res.status(200).json({
            applications,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in getapplyJob Controller",
            error: error.message
        })
    }
}

//admin dekhega ki kitna user ne apply kiya hai 
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await jobModel.findById(jobId).populate({
            path: 'applications',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'applicants'
            }
        })
        if(!job) {
            return res.status(403).json({
                message: "job not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in getApplicants Controller",
            error: error.message
        })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if(!status) {
            return res.status(403).json({
                message: "status is required",
                success: false
            })
        }
        //find application by applicant id
        const application = await applicationModel.findOne({
            _id: applicationId
        });
        if(!application) {
            return res.status(403).json({
                message: "Application not found",
                success: false
            })
        }
        //Update status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Updated Successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in UpdateStatus Controller",
            error: error.message
        })
    }
}