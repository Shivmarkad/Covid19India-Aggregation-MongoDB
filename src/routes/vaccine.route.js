import express from 'express';
import * as vaccineController from '../controllers/vaccine.controller';

const router = express.Router();

//route to get data
router.get('', vaccineController.getStateWiseConfimed);

router.get('/avg', vaccineController.getStateWiseAvgDosesAdmPD);
export default router;
