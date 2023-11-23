# API NutriCare

L'API NutriCare permet de faire le lien entre la base de données et l'application web NutriCare.

## Tables

| Table | Description |
| ------| ----------- |
| Element | Contient tout les élément chimique (vitamine, minéraux, etc...) et leurs informations |
| Food | Contient tout les aliments et leurs informations (nom, quantité d'élément, etc...) |
| User | Contient tout les utilisateurs et leurs informations (nom, prénom, etc...) |
| UserData | Contient les données personnelles des utilisateurs (poids, taille, prise de sang, etc...) |
| Reference | Lien vers site externe pour acheter les aliments |
| ScientificReference | Lien vers site externe pour avoir des informations scientifiques sur les éléments chimiques |

Les types de données sont décris en typescript ci-dessous. Tous ce qui peut être traduit est une clé pour le fichier de langue.

### Element

```typescript
interface Element {
    id: MongoId
    name: string
    image: string
    descriptionKey: string // clé pour la description dans le fichier de langue
    type: ElementType // vitamine, minéraux, etc...
    scientificReference: MongoId[];
}
```

### Food

```typescript
interface Food {
    id: MongoId
    name: string
    image: string
    descriptionKey: string // clé pour la description dans le fichier de langue
    elements: MongoId[]
    reference: MongoId[]
    scientificReference: MongoId[]
}
```

### User

```typescript
interface User {
    id: MongoId
    username: string
    email: string
    password: string
    lastLogout: Date
    userData: MongoId
}
```

### UserData

```typescript
interface UserData {
    id: MongoId
    weight: number
    height: number
    bloodTest: MongoId[]
    userConsumption: {
        food: MongoId
        quantity: number
    }[]
}
```

### Reference

```typescript
interface Reference {
    id: MongoId
    name: string
    url: string
}
```

### ScientificReference

```typescript
interface ScientificReference {
    id: MongoId
    name: string
    url: string[]
    by: string
}
```

## Endpoints

### Auth

| Endpoint | Description |
| -------- | ----------- |
| POST /auth/login | Permet de se connecter |
| POST /auth/register | Permet de s'inscrire |
| GET /auth/me | Permet de récupérer les informations de l'utilisateur connecté |
