var express = require('express');
var app = express();

app.use('/', express.static('client/'));

app.get('/rest/people', function (req, res) {
    var people = [];
    var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
    var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];

    for (var i = 0; i < 10; i++) {
        var namePosition = Math.floor(Math.random() * name.length);
        var surramePosition = Math.floor(Math.random() * surname.length);

        var person = new Person(i, name[namePosition] + " " + surname[surramePosition], "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
            "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
            "onsequat.");

        people.push(person);
    }
    res.send(JSON.stringify(people));
});

function Person(id, name, disclosableInfo) {
    this.id = id || -1;
    this.name = name || '';
    this.disclosableInfo = disclosableInfo || '';
}


app.listen(8090);
