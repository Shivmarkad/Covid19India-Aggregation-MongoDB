import HttpStatus from 'http-status-codes';
import * as CIndiaService from '../services/cIndia.service';

/**
 * Controller to get covid19 details available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getStateWiseConfimed = async (req, res, next) => {
  try {
    const data = await CIndiaService.getStateWiseConfimed();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'covid19 details fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};
