// Question: Pourquoi créer des services séparés ?
// Réponse: Pour mieux organiser le code, de le rendre plus modulaire et réutilisable. Cela facilite également les tests unitaires et l'entretien du code en isolant les différentes responsabilités.

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};