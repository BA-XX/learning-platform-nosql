# Projet de Fin de Module NoSQL

## Description du Projet  
Ce projet consiste en une plateforme d'apprentissage basée sur NoSQL. Vous pouvez consulter le dépôt associé pour plus de détails : [Learning Platform Template](https://github.com/pr-daaif/learning-platform-template).

## Réponses
### Question: Quelles sont les informations sensibles à ne jamais commiter ?
Toute information confidentielle inclut les mots de passe, les clés API, les jetons d'authentification, les informations de connexion à la base de données, etc.

### Question: Pourquoi utiliser des variables d'environnement ?
Les variables d'environnement permettent de séparer la configuration du code, de sécuriser les informations sensibles, et de faciliter le déploiement de l'application dans différents environnements (développement, test, production).

### Question: Pourquoi séparer les routes dans différents fichiers ?
Pour faciliter la gestion des routes, permettre de diviser les responsabilités entre différents modules et mieux organiser le code, le rendre plus lisible et maintenable.

### Question : Comment organiser les routes de manière cohérente ?
Les routes doivent être organisées par fonctionnalité ou par ressource. Par exemple, toutes les routes liées aux cours peuvent être regroupées dans un fichier `courseRoutes.js`, tandis que les routes liées aux étudiants peuvent être regroupées dans un fichier `studentRoutes.js`. Cela permet de garder une structure claire et logique.

### Question: Quelle est la différence entre un contrôleur et une route ?
Un contrôleur gère la logique métier et les opérations sur les données, tandis qu'une route gère les requêtes HTTP et les réponses associées.

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


