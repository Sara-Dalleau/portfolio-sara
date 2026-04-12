const express = require ('express');
const app = express (); 
const mongoose = require('mongoose');
require('dotenv').config();
const Project = require ("./models/project");

// CONNEXION BASE DE DONNÉE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Erreur MongoDB :', error));

//
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

  const project = new Project(req.body);

  project.save()
    .then(() => res.status(201).json(project))
    .catch(error => res.status(400).json({ error }));
});

//GET
app.get('/api/projects', (req, res, next) => {

  Project.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => { res.status(500).json({message: "Erreur serveur"});
    });

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