import express from 'express';
import * as testingController from '../controllers/testing.controller';

const router = express.Router();

//route to get testing data
router.get('', testingController.getStateWiseTesting);

export default router;
