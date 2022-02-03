var express = require('express');
var router = express.Router();
const data = require('../mock.json')
const array = data.map(i => {
  return {
          added: new Date(),
          ...i
          }
        })

const messages = [
  {
    title:"My Intro",
    text: "Hi There! I am Abhinav. I am a demo user of this message board. I welcome you to this message board.Welcoem again. We want you to speak your mind freely. ",
    user:"Abhinav",
    added: new Date()
  },
  {
    title:"Random Title",
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  ...array
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', dialogue: "Speak your mind freely", messages: messages });
});

module.exports = {
  router,
  addMessage: (arg) => {
    messages.unshift(arg)
  }
  };
