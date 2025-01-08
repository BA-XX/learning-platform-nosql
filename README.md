# Projet de Fin de Module NoSQL

## Description du Projet  
Ce projet consiste en une plateforme d'apprentissage basée sur NoSQL. Vous pouvez consulter le dépôt associé pour plus de détails : [Learning Platform Template](https://github.com/pr-daaif/learning-platform-template).


## Comment installer et lancer le projet
Pour installer et lancer le projet, suivez les étapes ci-dessous :

1. **Cloner le dépôt** :
    ```bash
    git clone https://github.com/BA-XX/learning-platform-nosql.git
    cd learning-platform-nosql
    ```

2. **Installer les dépendances** :
    ```bash
    npm install
    ```

3. **Configurer les variables d'environnement** :
    Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires :
    ```
    MONGODB_URI=mongodb://localhost:27017
    MONGODB_DB_NAME=learning_platform
    REDIS_URI=localhost:6379
    PORT=3000
    ```

4. **Lancer l'application** :
    ```bash
    npm start
    ```

5. **Accéder à l'application** :
    Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`.


## La structure du projet
La structure du projet est organisée comme suit :

```
learning-platform-nosql/
├──src
│   └── config/
│       └── db.js
│       └── env.js
│   └── controllers/
│       └── courseController.js
│   └── routes/
│       └── courseRoutes.js
│   └── services/
│       └── mongoService.js
│       └── redisService.js
│   └── app.js
├── .env
└── package.json
```

- **src/config/** : Ce répertoire contient les fichiers de configuration de l'application.
    - `db.js` : Configuration de la connexion à la base de données.
    - `env.js` : Gestion des variables d'environnement.

- **src/controllers/** : Ce répertoire contient les contrôleurs de l'application.
    - `courseController.js` : Gère la logique métier liée aux cours.

- **src/routes/** : Ce répertoire contient les définitions des routes de l'application.
    - `courseRoutes.js` : Définit les routes liées aux cours.

- **src/services/** : Ce répertoire contient les services utilisés par l'application.
    - `mongoService.js` : Service pour les opérations avec MongoDB.
    - `redisService.js` : Service pour les opérations avec Redis.

- **src/app.js** : Point d'entrée principal de l'application.

- **.env** : Fichier contenant les variables d'environnement nécessaires à l'application.

- **package.json** : Fichier de configuration de npm.


## Les choix techniques 
- **Choix de la base de données NoSQL**
Pour ce projet, nous avons choisi MongoDB comme base de données NoSQL en raison de sa flexibilité et de sa capacité à gérer des données non structurées.

- **Choix du framework**
Nous avons opté pour Express.js comme framework pour le développement de l'application.

- **Choix du système de cache**
Nous avons choisi Redis comme système de cache pour améliorer les performances de l'application. 

- **Choix des outils de développement**
Nous avons utilisé Visual Studio Code comme éditeur de code.


## Réponses
### Question: Quelles sont les informations sensibles à ne jamais commiter ?
Toute information confidentielle inclut les mots de passe, les clés API, les jetons d'authentification, les informations de connexion à la base de données, etc.

### Question: Pourquoi utiliser ded'environnement ?
Les variables d'environnement permettent de séparer la configuration du code, de sécuriser les informations sensibles, et de faciliter le déploiement de l'application dans différents environnements (développement, test, production).

### Question: Pourquoi séparer les routes dans différents fichiers ?
Pour faciliter la gestion des routes, permettre de diviser les responsabilités entre différents modules et mieux organiser le code, le rendre plus lisible et maintenable.

### Question : Comment organiser les routes de manière cohérente ?
Les routes doivent être organisées par fonctionnalité ou par ressource. Par exemple, toutes les routes liées aux cours peuvent être regroupées dans ère les requêtes HTTP et les réponses associées.

### Question : Pourquoi séparer la logique métier des routes ?
Séparer la logique métier des routes permet de rendre le code plus modulaire, maintenable et réutilisable.

### Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
Pour s'assurer que toutes les configurations nécessaires sont présentes et correctes avant que l'application ne commence à fonctionner. 

### Question: Que se passe-t-il si une variable requise est manquante ?
Si une variable requise est manquante, l'application peut ne pas fonctionner correctement, ce qui peut entraîner des erreurs critiques, des pannes ou des comportements inattendus. En validant les variables d'environnement au démarrage, on peut lever une erreur explicative et arrêter l'exécution de l'application avant qu'elle ne cause des problèmes.

### Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
Pour centraliser et réutiliser le code de connexion. Cela facilite également la maintenance et l'évolution du code, ainsi que la gestion des erreurs et des configurations spécifiques à chaque base de données.

### Question : Comment gérer proprement la fermeture des connexions ?
Pour gérer proprement la fermeture des connexions, il est important d'écouter les événements de fin de processus (comme 'SIGINT' ou 'SIGTERM') et d'appeler les méthodes de fermeture des clients de base de données. 

### Question: Pourquoi créer des services séparés ?
Pour mieux organiser le code, de le rendre plus modulaire et réutilisable. Cela facilite également les tests unitaires et l'entretien du code en isolant les différentes responsabilités.

### Question : Comment gérer efficacement le cache avec Redis ?
Pour gérer efficacement le cache avec Redis, il est important de définir des politiques de cache claires, telles que les stratégies d'expiration (TTL), l'invalidation du cache et l'utilisation de structures de données appropriées. 

Exemple : 
Utiliser une stratégie d'expiration pour les données mises en cache :
```javascript
redisClient.setex('user:1234', 3600, JSON.stringify(userData)); 
```
La clé 'user:1234' expirera après 3600 secondes (1 heure)

### Question: Quelles sont les bonnes pratiques pour les clés Redis ?
Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés descriptifs et cohérents, l'utilisation de namespaces pour organiser les clés, et l'évitement des clés trop longues. Il est également recommandé d'utiliser des conventions de nommage qui facilitent la gestion et la recherche des clés.

Exemple : 
Utiliser des namespaces pour organiser les clés :
- `user:1234` pour les données utilisateur
- `session:abcd1234` pour les sessions

### Question: Comment organiser le point d'entrée de l'application ?
Le point d'entrée de l'application doit être organisé de manière à initialiser toutes les configurations nécessaires avant de démarrer le serveur: la configuration des variables d'environnement, la connexion aux bases de données, la configuration des middlewares et le montage des routes.

### Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
La meilleure façon de gérer le démarrage de l'application est d'utiliser une fonction asynchrone qui encapsule toutes les étapes nécessaires pour démarrer le serveur. Pour gérer les erreurs de manière centralisée et d'assurer que toutes les connexions et configurations sont correctement initialisées.
