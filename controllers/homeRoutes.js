const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User, 
          attributes: ['name'],
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)

    res.render('homepage', {
      posts
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User, 
          attributes: ['name'],
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)

    res.render('dashboard', {
      posts,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
