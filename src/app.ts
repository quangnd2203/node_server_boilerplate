import * as dotenv from 'dotenv';
import apiService from './services/api_service';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'

dotenv.config();

const adminJS = new AdminJS({})
const adminRouter = AdminJSExpress.buildRouter(admin)

apiService.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is up and running on port: ${process.env.SERVER_PORT}`);
});
