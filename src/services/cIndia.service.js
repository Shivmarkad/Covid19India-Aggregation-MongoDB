import CIndia from '../models/CIndia.model';

//get covid data
export const getStateWiseConfimed = async () => {
  const data = await CIndia.aggregate([
    {
      $match: { ConfirmedIndianNational: { $gte: 0 } }
    },
    {
      $group: {
        _id: '$State/UnionTerritory',
        totalConfirmed: { $sum: '$Confirmed' }
      }
    }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};
