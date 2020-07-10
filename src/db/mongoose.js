const mongoose = require('mongoose');

const db = 'mongodb+srv://dbUser:laparamusical@cluster0-dqzsa.mongodb.net/gbh?retryWrites=true'

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to mongoose!');
}).catch(err => {
    console.log(err);
})