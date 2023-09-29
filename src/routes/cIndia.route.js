import express from 'express';
import * as cIndiaController from '../controllers/cIndia.controller';

const router = express.Router();

//route to get data
router.get('', cIndiaController.getStateWiseConfimed);

//route to get data
router.get('/f', cIndiaController.getForeignStateWiseConfimed);

export default router;
