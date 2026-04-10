const express = require ('express');
const app = express (); 

app.use ((req, res) => {
  res.json("Requete ok !");
});

module.exports = app;