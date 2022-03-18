import express from 'express';
import validator from 'express-validator';
import authRoute from './auth';
import userRoute from './users';
import loanRoute from './loan';

const router = express.Router();
router.use(validator());

router.use('/auth', authRoute);
router.use(userRoute);
router.use(loanRoute);

export default router;
