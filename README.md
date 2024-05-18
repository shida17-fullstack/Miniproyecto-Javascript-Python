# Miniproyecto JavaScript y Python

Este proyecto incluye una aplicación web desarrollada utilizando Flask (Python) en el backend y JavaScript (con HTML y CSS) en el frontend. La aplicación permite dibujar y borrar en un lienzo HTML5 de forma interactiva y es totalmente responsive.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **py:** Contiene el archivo `server.py` que configura y ejecuta el servidor Flask.
- **static:** Carpeta que almacena los archivos estáticos, como CSS, JavaScript e imágenes.
- **templates:** Carpeta que contiene los archivos HTML utilizados para renderizar las vistas de la aplicación.

## Componentes

### Server (server.py)

Este archivo configura y ejecuta el servidor Flask. Utiliza las carpetas `templates` y `static` para las vistas y los archivos estáticos respectivamente. El servidor sirve la página principal y cualquier archivo estático necesario para la aplicación.

### HTML (index.html)

El archivo `index.html` es la página principal de la aplicación. Contiene un lienzo HTML5 donde se puede dibujar y dos botones para dibujar y borrar.

### CSS (estilos.css)

El archivo `estilos.css` contiene estilos para la página principal y el lienzo HTML5. Está diseñado para que la aplicación sea responsive y se adapte a diferentes tamaños de pantalla.

### JavaScript (pintar_pantalla.js)

El archivo `pintar_pantalla.js` contiene el código JavaScript que permite la funcionalidad de dibujo y borrado en el lienzo HTML5. Maneja eventos de ratón y táctiles para permitir la interacción del usuario.

## Uso

Para ejecutar la aplicación, asegúrate de tener Python y Flask instalados. Luego, ejecuta el archivo `server.py`. La aplicación estará disponible en `http://127.0.0.1:5000` en tu navegador web.

```bash

python server.py

```

## Notas Adicionales

- * Esta aplSe recomienda abrir la aplicación en un navegador web moderno y actualizado para obtener la mejor experiencia.
- * Utiliza Flask como framework web en el backend y HTML5, CSS3 y JavaScript en el frontend.
- * Este README.md proporciona una descripción general del proyecto, su estructura, los componentes principales y cómo usarlo. 
- * Puedes modificarlo según tus necesidades y agregar más detalles si lo deseas.
