import express from 'express';
const router = express.Router();

import cIndia from './cIndia.route';
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

  return router;
};

export default routes;
