import express from 'express'

import {registerCompany}  from '../controllers/companyController.js'
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router = express.Router()

//Register a company
router.post('/register',upload.single('image') ,registerCompany)

//Company Login
router.post('/login', loginCompany)

//Get Company Data
router.get('/company',protectCompany , getCompanyData)

//Post a job
router.post('/post-job',protectCompany ,  postJob)

//Get Applicants Data of Company
router.get('/applicants',protectCompany ,  getCompanyJobApplicants)

//Get Company job list
router.get('/list-jobs',protectCompany , getCompanyPostedJobs)


//Change Applications Status
router.post('/change-status',protectCompany ,  ChangeJobApplicationsStatus)


//Change Applications Visibility
router.post('/change-visibility',protectCompany ,  changeVisiblity)

export default router