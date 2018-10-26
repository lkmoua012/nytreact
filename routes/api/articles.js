const express = require('express');
const router = express.Router();

// Article Model
const Article = require('../../models/Article');

// @route GET api/articles
// @desc Get All Articles
// @access Public
router.get('/', (req, res) => {
    Article.find()
        .sort({ dateAdded: -1})
        .then(articles => res.json(articles))
});

// @route POST api/articles
// @desc Save an Article
// @access Public
router.post('/', (req, res) => {

    // The req.body.#### should reflect what is in the NYT API to save to the database.
    const newArticle = new Article({
        title: req.body.title,
        author: req.body.author,
        datePublished: req.body.datePublished
    });

    console.log(req.body);

    newArticle.save().then(article => res.json(article));
});

// @route DELETE api/articles
// @desc Delete an Article
// @access Public
router.delete('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => article.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;