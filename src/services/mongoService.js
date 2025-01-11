// Question: Pourquoi créer des services séparés ?
// Réponse: Pour mieux organiser le code, de le rendre plus modulaire et réutilisable. Cela facilite également les tests unitaires et l'entretien du code en isolant les différentes responsabilités.


const { ObjectId } = require('mongodb');
const db = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // Implémenter une fonction générique de recherche par ID
  return db.getDb().collection(collection).findOne({ _id: ObjectId(id) });
}

async function save(collection, data) {
  return db.getDb().collection(collection).insertOne(data);
}

// Export des services
module.exports = {
  // Exporter les fonctions utilitaires
  findOneById,
  save
};