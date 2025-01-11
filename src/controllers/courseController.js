// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Un contrôleur gère la logique métier et les opérations sur les données, tandis qu'une route gère les requêtes HTTP et les réponses associées.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de rendre le code plus modulaire, maintenable et réutilisable.


const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');
const db = require('../config/db');

const collectionName = 'courses';

async function createCourse(req, res) {
  // Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable

  try {
    const { title, description, instructor } = req.body;
    if (!title || !description || !instructor) {
      return res.status(400).json({ message: 'Titre, description et instructeur sont requis.' });
    }

    const newCourse = await mongoService.save(collectionName, { title, description, instructor });
    await redisService.cacheData(collectionName + ":" + newCourse._id, newCourse , 3600);

    res.status(201).json({ message: 'Cours créé avec succès.', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du cours.', error: error.message });
  }

}

async function getCourse(req, res) {

}

async function getCourseStats(req, res) {

}

// Export des contrôleurs
module.exports = {
  // Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats

};