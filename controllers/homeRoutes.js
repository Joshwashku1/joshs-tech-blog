const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        // if session not login redirect else homepage
        const dbBlogData = await Blog.findAll({
            
        });

        const blogs = dbBlogData.map((blog) => blog.get({plain: true}));


        res.render('homepage', {
            blogs
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;