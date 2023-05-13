# Use react components in a Django site

## Installation

You first need to create your Django site and your react app inside it :

```bash
django-admin startproject django_react
cd django_react
npx create-react-app react-app
```

### Build react app

Now you need to build your react app to generate static files :

```bash
cd react-app
npm run build
```

### Run your Django server

You're ready to start your Django site :

```bash
cd ..
python manage.py runserver
```

## React app modification

Every time you change your react app code, you need to generate your new static files.
Go inside your react app folder and remove your build folder.

```bash
npm run build
```

## Ressource

YOUTUBE video : `https://www.youtube.com/watch?v=FhkqMHxchZ8`
