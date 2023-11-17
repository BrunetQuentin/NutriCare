# TODO for the project Nutricare

Format : `[Status] [Description]`\
Status : `[ ]` - Non commencé, `[>]` - En cours, `[x]` - Réalisé\
Trié par : Priority and Status

Les taches réalisées sont gardées dans le fichier [DONE.md](DONE.md)

Aucun test n'est prévu pour le moment, il faudra en faire une fois le projet fini.

## Global

- [ ] Faire les fichiers de configuration coté client et serveur
- [ ] Intégrer le projet common au server et app
- [ ] Faire les fichiers de documentation

## API

- [ ] Faire les fichiers de configuration (.env)
- [ ] Mettre un système de catch des erreurs
- [ ] Mettre en place les DTO pour les requêtes et catch les erreurs de call
- [ ] Mettre en place un système de log
- [ ] Connecter la base mongoDB pour pouvoir faire des requêtes
- [ ] Définir les différents tables de la base de données
- [ ] Middleware de vérification de token pour connexion
- [ ] Définir les endpoints de l'API

## App

- [ ] Faire les fichiers de configuration (.env)
- [ ] Service pour lié l'API et l'application (et gestion des erreurs)
- [ ] Service pour la gestion des connexion (Surcouche du service API) et gestion de l'utilisateur connecté
- [ ] Service pour la gestion des données de l'application (Surcouche du service API)
- [ ] Service pour la gestion de données personnelles (Surcouche du service connexion)
- [ ] Réaliser les maquettes de l'application sur figma
- [ ] Installation des librairies graphique, scss (peut-être une librairie graphique)
- [ ] Définir le routing de l'application pour accéder aux différentes pages
- [ ] Définir les différents composants de l'application
- [ ] Intégration des maquettes sur l'application

## Common

- [ ] Réaliser les interfaces(types) pour les objets de l'API (paramétres ou réponses)
- [ ] 