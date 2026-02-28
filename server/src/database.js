const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/empleadosdb')
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));
