const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("sdsdsdsd ")
        const url = 'mongodb://gnxAdminUser:F8BnszEM8X6TnEjgz8EE9NoRmor@149.102.137.27/srdb?authSource=admin';
        const client = await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        let db = mongoose.connection.db
        
       

        return db;

    } catch (err) {
        console.error('MongoDB not connected..', err);
        process.exit(1);
    }
};

module.exports = connectDB;
