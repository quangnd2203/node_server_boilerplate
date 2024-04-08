import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import { UserModel } from 'src/models/models.js'

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

const adminOptions = {
    resources: [UserModel],
}
const admin = new AdminJS(adminOptions)

const adminRouter = AdminJSExpress.buildRouter(admin)

export { admin, adminRouter }
