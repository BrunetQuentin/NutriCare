# Application web NutriCares

L'application peut avoir plusieurs build, un pour le client et un pour l'interface administrateur. L'utilisation de vite rentre en conflit avec react router dom
Toute navigation doit être fait a partir de la racine du site, acceder aux routes créé par react router dom directement ne fonctionnera pas.
En production l'application sera servi par deux serveurs node très léger, un pour le client et un pour l'interface administrateur.

## Maquettes
Les maquettes sont réalisé et disponibles sur [Figma](https://www.figma.com/)

- [Page d'acceuil](https://www.figma.com/)

## Les services
Les services sont des classes qui permettent de faire des appels HTTP vers l'API.
