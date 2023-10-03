import Vaccine from '../models/vaccine.model';

//get covid data
export const getStateWiseDosesAdm = async (state) => {
  const data = await Vaccine.aggregate([
    { $match: { State: state } },
    {
      $group: {
        _id: '$State',
        totalAdministered: { $sum: '$Total Doses Administered' }
      }
    }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};

//get covid data
export const getStateWiseAvgDosesAdmPD = async (state) => {
  const data = await Vaccine.aggregate([
    { $match: { State: state } },
    {
      $group: {
        _id: '$State',
        avgDailyAdministered: { $avg: '$Total Doses Administered' },
        avgCovaxinAdministered: { $avg: '$Covaxin (Doses Administered)' },
        avgCoviShieldAdministered: { $avg: '$CoviShield (Doses Administered)' }
      }
    }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};
