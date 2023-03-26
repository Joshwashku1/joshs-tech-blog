const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        // if session not login redirect else homepage
        const dbBlogData = await Blog.findAll({
            
        });

        const blogs = dbBlogData.map((blog) => blog.get({plain: true}));

        res.render('homepage', {
            blogs,
            // Pass the logged session to the template
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Dashboard route to add blogs
router.get('/dashboard', async (req, res) => {
    try{
        res.render('dashboard', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', async (req, res) => {
    try {
        if(req.session.loggedIn){
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;