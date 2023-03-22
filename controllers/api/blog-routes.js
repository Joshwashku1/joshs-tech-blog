const router = require('express').Router();
const { Blog } = require('../../models');

// find all blogs in database
router.get('/', async (req, res) => {
    try{
        const allBlogs = await Blog.findAll();
        res.status(200).json(allBlogs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a blog and store the user id as session id
router.post('/', async (req,res) => {
    try{
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete a blog based off its id
router.delete('/:id', async (req,res) => {
    try{
        const blogDeleted = await Blog.destroy({where: {id: req.params.id}});
        res.status(200).json(blogDeleted);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;