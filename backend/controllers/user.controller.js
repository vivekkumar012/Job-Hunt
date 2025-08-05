import { userModel } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { z } from 'zod';

export const register = async (req, res) => {
    try {
        const { fullname, email, password, phoneNumber, role } = req.body;
        if (!fullname || !email || !phoneNumber || !role || !password) {
            return res.status(402).json({
                message: "All Field are required for register",
                success: false
            })
        }
        //zod validation
        const userSchema = z.object({
            firstname: z.string().min(4, { message: "FirstName must be longer than 3 chars" }),
            email: z.string().email(),
            password: z.string().min(5, { message: "Password must be longer than 5 chars" })
        })
        const validateSchema = userSchema.safeParse(req.body);

        const user = await userModel.findOne({
            email: email
        });
        if (user) {
            return res.status(403).json({
                message: "User already exist",
                success: false
            })
        }
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            fullname: fullname,
            email: email,
            phoneNumber: phoneNumber,
            password: hashPass,
            role
        })
        return res.status(200).json({
            message: "Successfully signedUp",
            success: true,
            newUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in User Register",
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(403).json({
                message: "All fields are required for login",
                success: false
            })
        }
        let user = await userModel.findOne({
            email: email
        })
        if (!user) {
            return res.status(403).json({
                message: "User not found",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({
                message: "Password not matched",
                success: false
            })
        }
        //check role is correct or not
        if (role != user.role) {
            return res.status(400).json({
                message: "Account doesnot exist with current role",
                success: false
            })
        }
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `welcome back ${user.fullname}`,
            user,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in user Login",
            error: error.message
        })
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", " ", { maxAge: 0 }).json({
            message: "LogOut Successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Logout Error",
            error: error.message
        })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        // if(!fullname || !email || !phoneNumber || !bio || !skills) {
        //     return res.status(400).json({
        //         message: "All Fields are required",
        //         success: false
        //     })
        // }

        //cloudinary wala kaam yaha per hoga

        let skillsArray;
        if(skills) {
            skillsArray = skills.split(",");
        }
        //const skillsArray = skills.split(",");
        const userId = req.id; //middleware se
        let user = await userModel.findById(userId);
        if(!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber) user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills)  user.profile.skills = skillsArray

        //resume upload yaha per

        await user.save();
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: "Error in user while Update profile",
            error: error.message
        })
    }
}