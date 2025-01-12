// Question: Pourquoi créer des services séparés ?
// Réponse: Pour mieux organiser le code, de le rendre plus modulaire et réutilisable. Cela facilite également les tests unitaires et l'entretien du code en isolant les différentes responsabilités.


const { ObjectId } = require('mongodb');
const db = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // Implémenter une fonction générique de recherche par ID
  return db.getDb().collection(collection).findOne({ _id: ObjectId.createFromHexString(id) });
}

async function save(collection, data) {
  // Implémenter une fonction générique de sauvegarde
  return db.getDb().collection(collection).insertOne(data);
}

async function countDocuments(collection) {
  // Implémenter une fonction générique pour compter les documents
  return db.getDb().collection(collection).countDocuments();
}

async function aggregate(collection, pipeline) {
  // Implémenter une fonction générique pour agréger les données
  return db.getDb().collection(collection).aggregate(pipeline).toArray();
}

// Export des services
module.exports = {
  // Exporter les fonctions utilitaires
  findOneById,
  save,
  countDocuments,
  aggregate
};