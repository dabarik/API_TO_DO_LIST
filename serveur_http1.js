var express = require('express');
var app = express();
app.get('/', function(req, res) {
res.setHeader('Content-Type', 'application/json; charset=utf-8');
res.send(
    
    {"menu": {
        "id": "file",
        "value": "File",
        "popup": {
        "menuitem": [
        { "value": "New", "onclick": "CreateNewDoc()" },
        { "value": "Open", "onclick": "OpenDoc()" },
        { "value": "Close", "onclick": "CloseDoc()" }
        ]
        }
        }}
    
    );
});
app.get('/sous-sol', function(req, res) {
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});
app.get('/etage/:etagenum/chambre', function(req, res) {
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});

app.use(function(req, res, next){
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send(404, 'Page introuvable !');
});
app.listen(8080);

app.get('/todo', function(req, res) {


});

app.post('/todo/:ajouter', function(req, res){
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end('ajout de missions' + req.params.ajouter);

});