# 🛒 AltenShop-API

AltenShop-AP est une API qui permet de gérer un shop en ligne avec un système d’authentification et de gestion des produits.  
👨‍💼 **Administrateurs** : Il ajoute, modifie et supprime des produits.  
🛍️ **Utilisateurs** : peuvent parcourir les produits et les ajouter à leur panier.  

## 🚀 Technologies utilisées

Ce projet est construit avec les technologies suivantes :

- ⚡ **[AdonisJS 6](https://adonisjs.com/)** - Framework backend Node.js
- 🗄 **[Lucid ORM](https://lucid.adonisjs.com/docs/introduction)** - ORM intégré pour gérer la base de données
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** - Base de données relationnelle
- ⚡ **[Redis](https://redis.io/fr/)** - Stockage en mémoire pour optimiser les performances
- 🔐 **[JWT](https://jwt.io/)** - Authentification sécurisée par JSON Web Tokens

## 🛠 Installation et configuration

1. **Configurer l’environnement**  
   - Ajoutez le fichier `.env` : [lien de téléchargement](https://we.tl/t-9mzL0O3BQp)
   - Modifiez les champs liés à la base de données PostgreSQL.

2. **Installer les dépendances**

- installation des dépendances

```sh
   npm install
```
- Lancer la migration des tables vers la bdd postgreSQL

```sh
   node ace migration:run
```
- Lancer le serveur

```sh
  npm run dev
```

