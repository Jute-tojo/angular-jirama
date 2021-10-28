const mongoose = require('mongoose');

const users = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  adresse: { type: String, required: true }
});

module.exports = mongoose.model('User', users);