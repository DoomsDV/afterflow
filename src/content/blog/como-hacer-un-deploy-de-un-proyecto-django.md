---
    title: "¿Cómo hacer un deploy en django?}"
---
# Cómo hacer un deploy de un proyecto de django

Django es un framework de desarrollo web basado en Python que ofrece una serie de ventajas para crear aplicaciones web robustas y escalables. Sin embargo, para que una aplicación django pueda ser accesible desde internet, es necesario hacer un deploy o despliegue en un servidor web. En este artículo, te explicaré los pasos básicos para hacer un deploy de un proyecto de django usando el servicio de hosting gratuito de Heroku.

## Requisitos previos

Para seguir este tutorial, necesitas tener instalado lo siguiente en tu máquina local:

- Python 3.6 o superior
- Pipenv o virtualenv para gestionar los entornos virtuales de Python
- Git para el control de versiones
- Una cuenta de Heroku y el CLI de Heroku

Además, debes tener un proyecto de django ya creado y funcionando en tu entorno local. Puedes usar el proyecto que quieras, pero para este ejemplo voy a usar el proyecto que se genera al ejecutar el comando `django-admin startproject mysite`.

## Preparar el proyecto para el deploy

Antes de hacer el deploy, debemos asegurarnos de que nuestro proyecto cumple con algunos requisitos que exige Heroku. Estos son:

- Tener un archivo `requirements.txt` con las dependencias del proyecto. Este archivo se puede generar automáticamente con el comando `pip freeze > requirements.txt` desde el entorno virtual activado.
- Tener un archivo `Procfile` con la instrucción para ejecutar el servidor web. Este archivo debe contener una línea como esta: `web: gunicorn mysite.wsgi` donde `mysite` es el nombre del proyecto.
- Tener un archivo `runtime.txt` con la versión de Python que usa el proyecto. Este archivo debe contener una línea como esta: `python-3.9.9` donde `3.9.9` es la versión de Python que usas.
- Configurar la base de datos para usar PostgreSQL en lugar de SQLite, que es la base de datos por defecto de django. Para ello, debes instalar la librería `psycopg2` con el comando `pip install psycopg2` y modificar el archivo `settings.py` del proyecto para cambiar el diccionario `DATABASES` por algo como esto:

donde `user`, `pass`, `host`, `port` y `dbname` son los datos de conexión a la base de datos PostgreSQL que crearemos más adelante en Heroku.

## Crear la aplicación en Heroku

El siguiente paso es crear la aplicación en Heroku desde el CLI. Para ello, debes ejecutar el comando `heroku create nombre-de-la-aplicacion` desde la carpeta del proyecto, donde `nombre-de-la-aplicacion` es el nombre que quieras darle a tu aplicación. Este nombre debe ser único dentro de Heroku, así que si ya existe te dará un error y tendrás que elegir otro.

Al crear la aplicación, Heroku te asignará una URL del tipo `https://nombre-de-la-aplicacion.herokuapp.com/` donde podrás acceder a tu aplicación una vez que hagas el deploy.

## Crear la base de datos en Heroku

El siguiente paso es crear la base de datos PostgreSQL en Heroku desde el CLI. Para ello, debes ejecutar el comando `heroku addons:create heroku-postgresql:hobby-dev --app nombre-de-la-aplicacion` desde la carpeta del proyecto, donde `nombre-de-la-aplicacion` es el nombre que le diste a tu aplicación en el paso anterior.

Al crear la base de datos, Heroku te asignará una variable de entorno llamada `DATABASE_URL` con la cadena de conexión a la base de datos. Esta variable será usada por la librería `dj_database_url` que configuramos antes en el archivo `settings.py`.

## Hacer el deploy del proyecto

El último paso es hacer el deploy del proyecto desde el CLI. Para ello, debes ejecutar los siguientes comandos desde la carpeta del proyecto:

- `git init` para inicializar un repositorio git local
- `git add .` para añadir todos los archivos al repositorio
- `git commit -m "primer commit"` para hacer un commit con un mensaje
- `heroku git:remote -a nombre-de-la-aplicacion` para conectar el repositorio local con el remoto de Heroku
- `git push heroku master` para subir los cambios al remoto de Heroku

Al hacer el push, Heroku detectará que se trata de una aplicación Python y ejecutará los siguientes pasos:

- Instalará las dependencias del archivo `requirements.txt`
- Ejecutará las migraciones de la base de datos con el comando `python manage.py migrate`
- Ejecutará el servidor web con el comando del archivo `Procfile`

## Verificar el funcionamiento de la aplicación

Una vez que el deploy haya terminado, podrás acceder a tu aplicación desde la URL que te asignó Heroku. Si todo ha ido bien, deberías ver la página de inicio de tu proyecto django.

Si quieres ver los logs de la aplicación, puedes ejecutar el comando `heroku logs --tail --app nombre-de-la-aplicacion` desde el CLI.

Si quieres acceder al panel de administración de django, puedes crear un superusuario con el comando `heroku run python manage.py createsuperuser --app nombre-de-la-aplicacion` desde el CLI y luego ingresar con tus credenciales a la URL `https://nombre-de-la-aplicacion.herokuapp.com/admin/`.

## Conclusiones

En este artículo, hemos visto cómo hacer un deploy de un proyecto de django usando el servicio gratuito de Heroku. Este servicio tiene algunas limitaciones, como un espacio limitado de almacenamiento, un tiempo limitado de actividad y una velocidad limitada de respuesta, pero es suficiente para probar y mostrar tus proyectos django sin tener que pagar nada.

Espero que este artículo te haya sido útil y que te animes a hacer tus propios proyectos django y a desplegarlos en Heroku. Si tienes alguna duda o comentario, puedes dejarlo abajo. ¡Hasta la próxima!