import { model, Schema, Types } from 'mongoose'

interface IUserModel {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userModelSchema = new Schema<IUserModel>(
    {
        name: { type: 'String', required: true },
        email: { type: 'String', required: true },
        password: { type: 'String' },
        role: { type: 'String', enum: ['admin', 'user'], default: 'user'},
    },
    { timestamps: true },
)

export default model<IUserModel>('User', userModelSchema);