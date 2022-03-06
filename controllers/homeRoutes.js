const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
