import express from 'express';
import * as cIndiaController from '../controllers/cIndia.controller';

const router = express.Router();

//route to get all users
router.get('', cIndiaController.getStateWiseConfimed);

export default router;
