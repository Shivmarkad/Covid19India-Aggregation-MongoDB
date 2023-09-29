import HttpStatus from 'http-status-codes';
import * as vaccineService from '../services/vaccine.service';

/**
 * Controller to get covid19 details available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getStateWiseConfimed = async (req, res, next) => {
  try {
    const data = await vaccineService.getStateWiseDosesAdm(req.query.state);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'vaccination details fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

