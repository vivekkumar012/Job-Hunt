import mongoose from "mongoose";

const jobSchema = new mongoose.model({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String
    },
    salary: {
        type: Number
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    applications: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application"
    }
})

export const jobModel = mongoose.model("Job", jobSchema);