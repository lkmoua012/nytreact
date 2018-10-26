const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    url: {
        type: String
    },
    datePublished: {
        type: Date
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);