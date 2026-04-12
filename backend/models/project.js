const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({

  title: { type: String, required: true },

  date: { type: String, required: true},

  image: { type: String, required: true},

  type: { type: String, required: true},

  context: { type: String, required: true},

  github : { type: String, required: true},

  demo : { type: String},

  objectives: { type: String, required: true},

  skills: { type: String, required: true},

  results: { type: String, required: true},

  improvements: { type: String, required: true},

  stack: [
    {
      name: { type: String, required: true },
      logoUrl: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Project', projectSchema);