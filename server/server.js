var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});

// DELETE /todos/:id
app.delete('/todos/:id', (req,res) => {
  // Get the id
  var id = req.params.id;

  // Validate the id
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  // Remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {

    // success
    // if no doc, send 404
    if (!todo) {
      res.status(404).send();
    }

    // if doc, send doc back with 200
    res.send(todo);
  }).catch( (e) => {

    // error
    // 400 with empty body
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
