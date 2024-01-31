import  express from 'express'
import LoggerController from '../controller/loggerController.js'

const router = express.Router();
const loggerController = new LoggerController(process.env.NODE_ENV || 'development');

router.get('/loggerTest', (req, res) => {
  loggerController.loggerTest(req, res);
});

export default router;
