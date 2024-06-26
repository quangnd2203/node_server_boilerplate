import * as express from 'express';
import * as controller from '../controllers/vault.controller.js';

const vaultRouter = express.Router();

vaultRouter.post('/withdraw', async (req, res) => {
    controller.withdraw(req).then((value) => res.status(value.code).send(value));
});

export default vaultRouter;