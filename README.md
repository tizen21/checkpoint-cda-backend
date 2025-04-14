# 📦 Checkpoint CDA JS - Backend

Ce projet est une API GraphQL développée en Node.js avec TypeScript.  
Elle permet de gérer des pays (code, nom, emoji, continent) à l’aide d’Apollo Server, TypeGraphQL, TypeORM et une base de données SQLite.

---

## 🛠️ Stack technique

- **Node.js**
- **TypeScript**
- **Apollo Server v4**
- **TypeGraphQL v2 (beta)**
- **TypeORM v0.3**
- **SQLite**
- **ts-node-dev** (pour le hot reload)

---

## 🚀 Lancer le projet

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur en mode développement

```bash
npm run dev
```

Le serveur démarre sur :  
📍 [http://localhost:4000/](http://localhost:4000/)

---

## 📖 API GraphQL

### 📌 Mutation

- `addCountry(code: String!, name: String!, emoji: String!, continent: String!)`: ajoute un pays à la base de données

### 🔍 Queries

- `getAllCountries`: récupère tous les pays
- `getCountryByCode(code: String!)`: récupère un pays par son code (FR, BE, AN, ...)
- `getCountriesByContinent(continent: String!)`: récupère tous les pays d’un continent

---

## 🧪 Exemple de mutation pour ajouter plusieurs pays

```graphql
mutation {
  france: addCountry(
    code: "FR"
    name: "France"
    emoji: "🇫🇷"
    continent: "Europe"
  ) {
    code
  }
  japan: addCountry(code: "JP", name: "Japon", emoji: "🇯🇵", continent: "Asie") {
    code
  }
  brazil: addCountry(
    code: "BR"
    name: "Brésil"
    emoji: "🇧🇷"
    continent: "Amérique"
  ) {
    code
  }
  canada: addCountry(
    code: "CA"
    name: "Canada"
    emoji: "🇨🇦"
    continent: "Amérique"
  ) {
    code
  }
  germany: addCountry(
    code: "DE"
    name: "Allemagne"
    emoji: "🇩🇪"
    continent: "Europe"
  ) {
    code
  }
}
```

---

## 📂 Structure du projet

```
src/
├── entities/          → Entités TypeORM
│   └── Country.ts
├── resolvers/         → Résolveurs GraphQL
│   └── CountryResolver.ts
├── data-source.ts     → Configuration TypeORM
└── index.ts           → Point d'entrée du serveur
```
