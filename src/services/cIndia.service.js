import CIndia from '../models/CIndia.model';

//get covid data Indian National
export const getStateWiseConfimed = async () => {
  const data = await CIndia.aggregate([
    {
      $match: { ConfirmedIndianNational: { $gte: 0 } }
    },
    {
      $group: {
        _id: '$State/UnionTerritory',
        totalConfirmed: { $sum: '$ConfirmedIndianNational' }
      }
    }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};

//get covid data for foreign National
export const getForeignStateWiseConfimed = async () => {
  const data = await CIndia.aggregate([
    { $match: { ConfirmedForeignNational: { $gte: 0 } } },
    {
      $group: {
        _id: '$State/UnionTerritory',
        totalConfirmed: { $sum: '$ConfirmedForeignNational' }
      }
    },
    { $sort: { total: -1 } }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};
