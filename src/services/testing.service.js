import Testing from '../models/testing.model';

//get covid data for testing samples
export const getStateWiseTesting = async () => {
  const data = await Testing.aggregate([
    {
      $group: {
        _id: '$State',
        TotalSampleCollected: { $sum: "$TotalSamples" },
        TotalPositive: { $sum: "$Positive" },
      }
    },
    { $sort: { TotalPositive: -1 } }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};
