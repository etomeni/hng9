import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

// Controllers
import { 
    stage1Ctr
} from '../../controllers/stageOneCtrl.js';

router.use(bodyParser.json());

// get site data
router.get(
    '/stageone',
    stage1Ctr
);

export default router;