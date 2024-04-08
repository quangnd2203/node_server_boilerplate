import { model, Schema, Types } from 'mongoose'

interface IUserModel {
    name: string;
    email: string;
}

const userModelSchema = new Schema<IUserModel>(
    {
        name: { type: 'String', required: true },
        email: { type: 'String', required: true },
    },
    { timestamps: true },
)

export default model<IUserModel>('User', userModelSchema);