// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Un contrôleur gère la logique métier et les opérations sur les données, tandis qu'une route gère les requêtes HTTP et les réponses associées.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de rendre le code plus modulaire, maintenable et réutilisable.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
};