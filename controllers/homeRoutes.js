const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {try {
    // Get all posts and JOIN with user data
    const postData = await post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data 
    const posts = postData.map((post) => post.get({ plain: true }));

    // Use data to render on page
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }})