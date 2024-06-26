
import express, { Application } from "express";
import cors from 'cors';
import router from '../routes/routes.js';
import { NetworkResponse, STATUS_CODE } from '../models/network_response.model.js';
import { admin, adminRouter } from './admin_js.service.js';

const apiService: Application = express();

// const admin = new AdminJS({})
// const adminRouter = AdminJSExpress.buildRouter(admin)
apiService.use(admin.options.rootPath, adminRouter)

apiService.use(express.json());
apiService.use(express.urlencoded({ extended: true }));
apiService.use(cors());
apiService.options('*', cors());
apiService.use('/api', router);
apiService.use((req, res, next) => {
    next(NetworkResponse.fromErrors(STATUS_CODE.not_found, 'not_found'));
});

export default apiService;