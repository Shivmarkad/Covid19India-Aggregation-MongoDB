import HttpStatus from 'http-status-codes';
import * as testingService from '../services/testing.service';

/**
 * Controller to get testing details 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getStateWiseTesting = async (req, res, next) => {
  try {
    const data = await testingService.getStateWiseTesting();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Testing details fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

