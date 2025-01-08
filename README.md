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


