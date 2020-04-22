const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbConfig = require('../config/db.confing');

mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const TodoSchema = new Schema({
    name: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})
const Todo =  mongoose.model('Todo', TodoSchema);
module.exports = Todo;
