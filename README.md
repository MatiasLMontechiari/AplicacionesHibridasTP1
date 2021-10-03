# PaloYAdentro

## Datos de Entrega en Materia Aplicaciones Hibridas
 - Matias Leonardo Montechiari

## Features

- Aplicacion Web de vista de testimonios y carga de testimonios

## Installation

 - Clona el repo o descarga el archivo .zip
 - En la carpeta raiz de la descarga correr "npm run install"
 - Y para lanzarlo instalar el nodemon correr "npm install nodemon"
 - Para correr el server "npm run server"

## WEB

 - http://localhost/ es el index abajo se muestran solo los testimonios publicos
 - http://localhost/testimonio es el formulario de carga de testimonios

## API

 - GET en http://localhost/api trae todos los testimonios cargados
 - PATCH en http://localhost/api/5 al testimonio con ID 5 lo hace publico (tener en cuenta que para salir en el index el testimonio debe ser publico)
 - DELETE en http://localhost/api/5 al testimonio con ID 5 lo elimina
