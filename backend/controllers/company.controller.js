import { success } from "zod";
import { companyModel } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if(!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            })
        }
        let company = await companyModel.findOne({
            name: companyName
        })
        if(company){
            return res.status(400).json({
                message: "You can't register same company",
                success: false
            })
        } 
        company = await companyModel.create({
            name: companyName,
            userId: req.id
        })
        return res.status(201).json({
            message: "Company registered successfully",
            company,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in registerCompany Controller",
            error: error.message
        })
    }
}

export const getCompany = async (req, res) => {
    try {
        const userId = req.id; //logged in userId
        const companies = await companyModel.find({userId});
        if(!companies) {
            return res.status(404).json({
                message: "Companies not found",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in getCompany Controller",
            error: error.message
        })
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await companyModel.findById(companyId);
        if(!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in getCompanyById Controller",
            error: error.message
        })
    }
}

export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location} = req.body;
        const companyId = req.params.id;
        const file = req.file;
        //cloudinary
        
        const updateData = {name, description, website, location};
        const company = await companyModel.findByIdAndUpdate(companyId, updateData, {new: true});
        if(!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "company info updated",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in updateCompany Controller",
            error: error.message
        })
    }
}