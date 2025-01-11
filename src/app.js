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
    // Valider les variables d'environnement
    config.validateEnv();
    
    // Initialiser les connexions aux bases de données
    await db.connectMongo();
    await db.connectRedis();

    // Configurer les middlewares Express
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Monter les routes
    app.use('/courses', courseRoutes);
    app.use('/students', studentRoutes);

    // Démarrer le serveur
    const PORT = config.port || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
    
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // Implémenter la fermeture propre des connexions
  try {
    await db.disconnectMongo();
    await db.disconnectRedis();
    console.log('Connexions aux bases de données fermées proprement.');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la fermeture des connexions:', error);
    process.exit(1);
  }
});

startServer();