# Markdown Links

***
## ÍNDICE
* [1. your md Links 📁](#1-your-md-Links)
* [2. Instalación](#2-Instalación)
* [3. Realización del Proyecto](#3-Realización-del-Proyecto)
* [5. Tecnologías empleadas](#4-tecnologias-empleadas)

***
# 1. your md Links

 👩🏽‍💻 **your-MD-LINKS** : Librería de línea de comando (CLI) desarrollada con Node. js,  que permite validar y reportar algunas estadísticas📊 las URLs que se encuentran en los archivos 📁 en formato Markdown 📑 dada una ruta.

***

# 2. Instalación
Para instalar la librería your md links, se necesitará escribir el siguiente comando en la terminal.

``` js
npm i your-markdown-links
```

# 3. Realización del Proyecto
## Este proyecto se divide en dos partes
## 3.1 Diagramas de Flujo ✍🏼

### A) JavaScript API

[Diagrama API](https://github.com/fifete/your-md-links/blob/main/images/CLI-flowchart.png)

### B) CLI (Command Line Interface - Interfaz de Línea de Comando)

[Diagrama CLI](https://github.com/fifete/your-md-links/blob/main/images/JavaScript-flowchart.png)

## 3.2 Descripción del proceso ✍🏼
### A) JavaScript API

El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

## 📌 `mdLinks(path, options)`

### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node - _current working directory_).
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

### B) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

## 📌 `--help`

Muestra un cuadro con los comandos que se pueden utilizar

## 📌 `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

## 📌 `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```
## 📌 `--stats --validate` o `--validate --stats`

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
# 4. Tecnologías empleadas 👩🏾‍💻

## Para la Planificación ✍

-   [Github Projects:](https://developer.mozilla.org/es/docs/Web/HTML) En este proyecto se utilizó la herramienta de planificación y organización de GitHub llamada **Github Projects**.Mediante **issues** y **milestones** podrás organizar y planificar tareas y objetivos concretos.

## Para el Testing: ✍
-   [Jest:](https://jestjs.io/docs/es-ES/getting-started)  Framework para realizar los testing unitarios.

-   [Eslint:](https://jestjs.io/docs/es-ES/getting-started)  Herramienta de linting para analizar el código en busca de errores.

## Para la funcionalidad: ✍
-   [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript)  Para dar la funcionalidad a la plataforma.

-   [Node.js:](https://nodejs.org/es/)  es un entorno de ejecución para JavaScript construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/). Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...

-   [Node-fetch:](https://www.npmjs.com/package/node-fetch) 
-   [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional `README.md`).

