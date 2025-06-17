# HOI4 Modding Interface

This repository contains a very lightweight structure for building a HOI4 modding interface.
The root `index.html` now includes a simple interface that fetches and displays
a list of mods from the Laravel API. You can filter the list with a search box
and create new mods using a small form that submits to the backend API. Clicking
on a mod opens `mod.html`, where you can edit the mod's fields and save the
changes back to the API.

- `frontend` – a React (Vite) based single page application.
- `backend` – a Laravel compatible API using MySQL.

These folders are intentionally minimal so they can be expanded locally by running `npm install` and `composer install` if desired.

## API Endpoints

- `GET /api/mods-all` – list all mods
- `POST /api/mods` – create a new mod
- `GET /api/mods/{id}` – fetch a single mod
- `PUT /api/mods/{id}` – update a mod
