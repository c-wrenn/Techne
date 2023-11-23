//provide hardcoded data to render dynamically

const setPosts = [
    {
        blogpost: "I love learning about Model View Controllers!"
    }
]

//Get home page views
router.get('/', async (req, res) => {
    res.render('homepage');
  });

  module.exports = router;