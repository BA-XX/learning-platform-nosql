// Question: Comment organiser le point d'entrée de l'application ?
// Réponse : Le point d'entrée de l'application doit être organisé de manière à initialiser toutes les configurations nécessaires avant de démarrer le serveur: la configuration des variables d'environnement, la connexion aux bases de données, la configuration des middlewares et le montage des routes.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// // Réponse :La meilleure façon de gérer le démarrage de l'application est d'utiliser une fonction asynchrone qui encapsule toutes les étapes nécessaires pour démarrer le serveur. pour gérer les erreurs de manière centralisée et d'assurer que toutes les connexions et configurations sont correctement initialisées.

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();