const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://suryabisht111:4Z5jkmr49tmehZAf@clusterform.cspql.mongodb.net/?retryWrites=true&w=majority&appName=ClusterForm'); // No need for useNewUrlParser and useUnifiedTopology
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
