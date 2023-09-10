const mongoose = require('mongoose');
const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect("mongodb+srv://root:rTCVgNup3YlvRFzS@cluster0.4g83if7.mongodb.net/?retryWrites=true&w=majority");
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}



module.exports = connectDB;

