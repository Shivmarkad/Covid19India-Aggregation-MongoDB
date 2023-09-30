import express from 'express';
const router = express.Router();

import cIndia from './cIndia.route';
import vaccine from './vaccine.route';
import testing from './testing.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/cIndia', cIndia);
  router.use('/vaccine', vaccine);
  router.use('/testing', testing);

  return router;
};

export default routes;
