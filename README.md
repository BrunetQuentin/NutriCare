# Le projet NutriCare

**NutriCare**, l'application dédiée au suivi nutritionnel, assure la surveillance des éléments essentiels pour maintenir un équilibre nutritionnel, avec des recommandations personnalisées pour un apport énergétique équilibré. Elle propose également des conseils sur les compléments alimentaires, comblant ainsi d'éventuelles lacunes micronutritionnelles pour une santé globale optimale.

## Installation

Pour installer le projet, il suffit de cloner le dépôt git :

```bash
git clone git@github.com:BrunetQuentin/NutiCare.git
```
*Ce projet utilise [yarn](https://yarnpkg.com/) comme gestionnaire de paquets, il n'est pas conçu pour fonctionner avec un autre gestionnaire de paquets.*

Puis d'installer les dépendances des projets app, common et server :
```bash
yarn install
```
*Cette commande va simplement dans tous les répertoires et effectue la commande `yarn`*


## Utilisation

Pour lancer le projet en mode développement, il suffit de lancer la commande suivante :
```bash
yarn dev
```

Pour lancer le projet en mode production, il suffit de lancer la commande suivante :
```bash
yarn build
yarn start
```
La commande `yarn build` va Transpiler le code TypeScript en JavaScript.
Puis la commande `yarn start` va lancer le serveur NestJs (API) et le processus node qui va servir l'application ReactJs.

## Configuration

// TODO
Faire les fichiers de configuration coté client et serveur

## Fichiers de documentation
[Maquettes et Fonctionnement de l'UI/UX](app/README.md) - readme\
[Endpoints et fonctionnement de l'API](server/README.md) - readme\
[Avancement du projet et TODO](TODO.md) - todo

## Contribution
[Signate](https://github.com/BrunetQuentin) - Quentin Brunet
