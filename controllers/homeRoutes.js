const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        // if session not login redirect else homepage
        
        res.render('homepage');
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