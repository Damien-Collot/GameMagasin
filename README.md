# GameMagasin

Vous trouverez ici le répertoire du projet GameMagsin réalisé par COLLOT Damien, SYMPHORIEN Mathieu, WROBEL Nicolas.

Ce projet est un magsin de jeux vidéos en ligne.

## Prérequis

Avoir une base de données MongoDb contactable sur l'url '127.0.0.1:27017'


## Initialisation

Lancer le fichier db.js comme ceci

```js
node db.js
```

Initier le serveur en éxécutant dans le dossier back-GameMagasin la commande

```js
npm start
```
Installer toutes les dépendances et leurs paquets en lançant dans le dossier front-Magasin la commande

```js
npm install -y
```

Initier le serveur front en lançant la commande suivante, il se peut que le port soit déjà pris par le serveur précédent dans ce cas ci taper 'Y' pour accepter de lancer ce serveur sur un port différent.

```js
npm start
```

Une page web devrait s'ouvrir et vous diriger vers le site web. Dans le cas contraire taper la commande suivante (le port correspond à celui que vous avez mis)

```js
http://localhost:3001
```

Attention, la page web n'est pas abouti, il ne sera pas possible de tester toutes les routes.
