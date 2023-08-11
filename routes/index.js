const express = require('express');
const router = express.Router();

let todos = [];

router.get('/', (req, res) => {
  res.render('index', { todos });
});

router.post('/add', (req, res) => {
  const { text } = req.body;
  todos.push({ text, completed: false });
  res.redirect('/');
});

router.post('/update/:index', (req, res) => {
  const { index } = req.params;
  if (todos[index]) {
    todos[index].completed = true;
  }
  res.redirect('/');
});

router.post('/delete/:index', (req, res) => {
  const { index } = req.params;
  if (todos[index]) {
    todos.splice(index, 1);
  }
  res.redirect('/');
});

module.exports = router;
