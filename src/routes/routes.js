import BusinessController from '../controllers/business.controller.js';
import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


const businessController = new BusinessController();

router.get("/",authMiddleware, businessController.showHome)
router.get('/add-name', businessController.showNamePage)



router.get('/business-login', businessController.businessLogin)
router.get('/verify-otp', businessController.getVerifyOtpPage)
router.get('/manage-business',authMiddleware , businessController.showManageBusiness)
router.get('/enter-business-details',authMiddleware, businessController.showEnterBusinessDetails)
router.get('/logout', businessController.logout)
router.get('/enter-your-details',authMiddleware, businessController.showNamePage)

router.post('/enter-your-details', businessController.addNameDetails)
router.post('/show-business', businessController.showBusiness)
router.post('/send-otp', businessController.sendOtp);
router.post('/verify-otp', businessController.verifyOtpHandler);
router.post('/list-business',authMiddleware, businessController.addBusinessDetails);


router.get('/viewResturent',businessController.fetchAllBusinesses);

router.get('/business-details',businessController.allBusinessDetails);

export default router;