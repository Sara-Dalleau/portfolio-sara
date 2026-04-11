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
let projects = [
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

//POST
app.post('/api/projects', (req, res, next) => {

  projects.push(req.body);
  res.status(201).json(req.body);
});

//GET
app.get('/api/projects', (req, res, next) => {

  res.status(200).json(projects);
});

//PUT
app.put('/api/projects/:id', (req, res, next) => {

  const id = req.params.id;

  const project = projects.find(project => project._id === id);

  if (!project) {
    
    res.status(404).json({ message: "Le projet n'existe pas"});
    return;
  }
  
  project.title = req.body.title;
  project.description = req.body.description;
  
  res.status(200).json({ message: "Projet modifié" });
});

//DELETE
app.delete('/api/projects/:id', (req, res, next) => {

  const id = req.params.id;
  projects = projects.filter(project => project._id !== id);
  res.status(200).json({ message: "Projet supprimé" });
});

module.exports = app;