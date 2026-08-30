# Samu · Psicólogo Gamer

Web de una página para Samu, psicólogo especializado en la intersección entre
salud mental, videojuegos y tecnología. Construida con HTML, CSS y JavaScript
puros (sin frameworks ni pasos de compilación), lista para publicarse en
GitHub Pages.

## Estructura del proyecto

```
.
├── index.html          # Toda la maquetación y el contenido
├── styles.css           # Estilos (tokens de marca, layout, responsive)
├── script.js             # Menú móvil, año dinámico y animaciones al hacer scroll
├── assets/
│   ├── hero-samu.png              # Ilustración principal
│   └── personajes/                # Mascota en distintas poses (PNG con fondo transparente)
│       ├── personaje-1.png
│       ├── personaje-2.png
│       ├── personaje-3.png
│       ├── personaje-4.png
│       └── personaje-5.png
└── README.md
```

## Cómo verlo en local

No necesitas instalar nada. Basta con abrir `index.html` en el navegador, o
levantar un servidor simple:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `samu-psicologo-gamer`).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio:

   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/samu-psicologo-gamer.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment", elige **Deploy from a branch**, rama `main` y
   carpeta `/ (root)`.
5. Guarda. En un par de minutos tu web estará publicada en
   `https://TU-USUARIO.github.io/samu-psicologo-gamer/`.

## Personalizar contenido

- **Textos**: edita directamente `index.html`, todo el contenido está en
  español y organizado por secciones (`Sobre mí`, `Qué hago`, `Intereses`,
  `Hablamos`).
- **Datos de contacto**: busca en `index.html` la sección `id="hablamos"` y
  cambia el email, el número de WhatsApp (`https://wa.me/...`) y el usuario
  de Instagram.
- **Colores**: todos los colores de marca están centralizados como variables
  CSS al principio de `styles.css`, dentro de `:root`.
- **Favicon / pestaña del navegador**: usa `assets/personajes/personaje-1.png`;
  cámbialo por tu propio icono si lo prefieres.

## Accesibilidad y rendimiento

- Navegación por teclado con foco visible.
- Respeta `prefers-reduced-motion` para quienes prefieren menos animaciones.
- Sin dependencias externas salvo las tipografías de Google Fonts (Space
  Grotesk + Inter).
- Totalmente responsive: móvil, tablet y escritorio.
