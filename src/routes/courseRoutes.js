// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Pour faciliter la gestion des routes, permettre de diviser les responsabilités entre différents modules et mieux organiser le code, le rendre plus lisible et maintenable.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Les routes doivent être organisées par fonctionnalité ou par ressource. Par exemple, toutes les routes liées aux cours peuvent être regroupées dans un fichier `courseRoutes.js`, tandis que les routes liées aux étudiants peuvent être regroupées dans un fichier `studentRoutes.js`. Cela permet de garder une structure claire et logique.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/stats', courseController.getCourseStats);
router.get('/:id', courseController.getCourse);

module.exports = router;