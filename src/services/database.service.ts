import mongoose from 'mongoose'

async function connect(){
    console.log(`Connecting to mongoDB: mongodb://boilerplate-mongo:27017/`);
    try{
        const mongo = await mongoose.connect(`mongodb://boilerplate-mongo:27017/`, {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        });
        return mongo.connection.readyState == 1;
    }catch(e){
        console.log('Error connecting to mongoDB');
        console.error(e);
        return false;
    }
}

export {
    connect,
}