// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Pour centraliser et réutiliser le code de connexion. Cela facilite également la maintenance et l'évolution du code, ainsi que la gestion des erreurs et des configurations spécifiques à chaque base de données.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Pour gérer proprement la fermeture des connexions, il est important d'écouter les événements de fin de processus (comme 'SIGINT' ou 'SIGTERM') et d'appeler les méthodes de fermeture des clients de base de données. 

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
    setTimeout(connectMongo, 5000); // Retry après 5 secondes
  }
}

async function connectRedis() {
  // Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({ url: config.redis.uri });
    redisClient.on('error', (err) => {
      console.error('Erreur de connexion à Redis :', err);
      setTimeout(connectRedis, 5000); // Retry après 5 secondes
    });
    await redisClient.connect();
    console.log('Connexion à Redis réussie');
  } catch (error) {
    console.error('Erreur de connexion à Redis :', error);
    setTimeout(connectRedis, 5000); // Retry après 5 secondes
  }
}

// Gestion propre de la fermeture des connexions
async function disconnectMongo() {
  // Implémenter la déconnexion MongoDB
  try {
    await mongoClient.close();
    console.log('Déconnexion de MongoDB réussie');
  } catch (error) {
    console.error('Erreur de déconnexion de MongoDB :', error);
  }
}

async function disconnectRedis() {
  // Implémenter la déconnexion Redis
  try {
    await redisClient.quit();
    console.log('Déconnexion de Redis réussie');
  } catch (error) {
    console.error('Erreur de déconnexion de Redis :', error);
  }
}

// Export des fonctions et clients
module.exports = {
  // Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  mongoClient,
  redisClient,
  db
};