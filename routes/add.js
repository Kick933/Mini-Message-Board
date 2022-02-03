var express = require('express');
var router = express.Router();
var { addMessage } = require('./index')
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add',{title:"Add Message", dialogue:"Speak your mind freely"})
});

router.post('/',function(req,res,next) {
  addMessage({
    title:req.body.title,
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
