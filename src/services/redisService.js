// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Pour gérer efficacement le cache avec Redis, il est important de définir des politiques de cache claires, telles que les stratégies d'expiration (TTL), l'invalidation du cache et l'utilisation de structures de données appropriées. 
// Exemple : 
// Utiliser une stratégie d'expiration pour les données mises en cache :
// redisClient.setex('user:1234', 3600, JSON.stringify(userData)); // La clé 'user:1234' expirera après 3600 secondes (1 heure)

// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés descriptifs et cohérents, l'utilisation de namespaces pour organiser les clés, et l'évitement des clés trop longues. Il est également recommandé d'utiliser des conventions de nommage qui facilitent la gestion et la recherche des clés.
// Exemple : 
// Utiliser des namespaces pour organiser les clés :
// 'user:1234' pour les données utilisateur
// 'session:abcd1234' pour les sessions
// 'cache:homepage' pour les données mises en cache de la page d'accueil

const db = require('../config/db');

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
  // Implémenter une fonction générique de cache
  try {
    db.getRedisClient().set(key, JSON.stringify(data), "EX", ttl);
  } catch (err) {
    return null;
  }
}

async function getCachedData(key) {
  // Implémenter une fonction générique pour récupérer les données mises en cache
  try {
    const data = await db.getRedisClient().get(key);
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

module.exports = {
  // Exporter les fonctions utilitaires
  cacheData,
  getCachedData
};