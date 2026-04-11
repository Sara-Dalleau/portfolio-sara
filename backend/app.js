const express = require ('express');
const app = express (); 

app.use(express.json());

//CORS
app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

//DATA TEMPORAIRE
const projects = [
  {
    _id: 'abcd321',
    title: 'Projet 1',
    description: 'Projet kasa'
  },
  {
    _id: 'abcd123',
    title: 'Projet 2',
    description: 'Projet Mon vieux grimoire'
  },
];

app.post('/api/projects', (req, res, next) => {
  projects.push(req.body);
  res.status(201).json(req.body);
});

app.get('/api/projects', (req, res, next) => {
  res.status(200).json(projects);
});

app.put('/api/projects', (req, res, next) => {

});

app.delete('/api/projects', (req, res, next) => {
  
});
module.exports = app;