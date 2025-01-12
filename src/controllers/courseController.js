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
    await redisService.cacheData(collectionName + ":" + newCourse._id, newCourse, 3600);

    res.status(201).json({ message: 'Cours créé avec succès.', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du cours.', error: error.message });
  }

}

async function getCourse(req, res) {
  // Implémenter la récupération d'un cours
  // Utiliser les services pour la logique réutilisable

  try {
    const courseId = req.params.id;
    const cachedCourse = await redisService.getCachedData(collectionName + ":" + courseId);
    if (cachedCourse) {
      return res.status(200).json({ message: 'Cours récupéré avec succès.', course: cachedCourse, fromCache: true });
    }

    const course = await mongoService.findOneById(collectionName, courseId);
    if (!course) {
      return res.status(404).json({ message: 'Cours non trouvé.' });
    }

    await redisService.cacheData(collectionName + ":" + courseId, course, 3600);
    res.status(200).json({ message: 'Cours récupéré avec succès.', course, fromCache: false });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du cours.', error: error.message });
  }
}
async function getCourseStats(req, res) {
  // Implémenter la récupération des statistiques des cours
  try {
    const cachedStats = await redisService.getCachedData(collectionName + ":stats");
    if (cachedStats) {
      return res.status(200).json({ message: 'Statistiques des cours récupérées avec succès.', stats: cachedStats, fromCache: true });
    }

    const totalCourses = await mongoService.countDocuments(collectionName);
    const coursesByInstructor = await mongoService.aggregate(collectionName, [
      { $group: { _id: "$instructor", count: { $sum: 1 } } }
    ]);

    const stats = { totalCourses, coursesByInstructor };
    await redisService.cacheData(collectionName + ":stats", stats, 3600);

    res.status(200).json({ message: 'Statistiques des cours récupérées avec succès.', stats, fromCache: false });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des statistiques des cours.', error: error.message });
  }
}

// Export des contrôleurs
module.exports = {
  // Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats

};