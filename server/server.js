var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/users");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo(req.body);

    todo.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

//GET /todos/ID

app.listen(3000, () => { console.log("Started on port 3000") });

