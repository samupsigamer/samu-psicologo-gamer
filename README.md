# Samu · Psicólogo Gamer

Web de una página para Samu, psicólogo especializado en la intersección entre
salud mental, videojuegos y tecnología. Construida con HTML, CSS y JavaScript
puros (sin frameworks ni pasos de compilación), lista para publicarse en
GitHub Pages.

## Secciones incluidas

1. **Inicio / Sobre mí** — presentación, cita destacada y badges de especialidad.
2. **Tira de categorías** — Infancia, Adolescencia, Familias, Psicología, Gaming
   y tecnología, Divulgación.
3. **Qué hago** — las cuatro formas de acompañamiento.
4. **Servicios** — las seis áreas de trabajo (desarrollo cognitivo, regulación
   emocional, habilidades sociales, lenguaje y comunicación, riesgo de adicción
   temprana, prevención y bienestar), con ilustración de Samu en su sillón.
5. **Mi experiencia / ¿Cómo trabajo?** — trayectoria y metodología, con la
   ilustración de la familia leyendo.
6. **Me interesa especialmente** — etiquetas de temas + barra de estadísticas.
7. **Recursos** — seis infografías descargables (loot boxes, riesgos por
   pantallas 0-2 y 2 años, lenguaje y comunicación, adicción temprana,
   "conóceme").
8. **Banner de llamada a la acción** — "Cada niño tiene un potencial único".
9. **¿Hablamos?** — email, WhatsApp e Instagram.
10. **Footer** — enlaces rápidos, redes sociales y personajes.

## Estructura del proyecto

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── hero-samu.png                    # Ilustración principal del hero
│   ├── personajes/                      # Personajes en distintas poses (PNG, fondo transparente)
│   │   ├── personaje-1.png … personaje-5.png   # Mascota niño (poses originales)
│   │   ├── samu-adulto.png              # Samu adulto saludando
│   │   ├── samu-sillon.png              # Samu adulto en el sillón (sección Servicios)
│   │   ├── nino-libro.png               # Niño leyendo
│   │   ├── nina-peluche.png             # Niña con peluche
│   │   ├── nino-laptop-2.png            # Niño con portátil (sección Contacto)
│   │   └── familia-lectura.png          # Familia leyendo (sección Mi experiencia)
│   ├── stickers/                        # Stickers pequeños usados como acentos decorativos
│   │   ├── sticker-idea.png, sticker-corazon.png, sticker-dibujando.png,
│   │   │   sticker-libro.png, sticker-auriculares.png, sticker-taza.png
│   │   └── sticker-pregunta.png, sticker-portatil-frustrado.png   # disponibles para futuros usos
│   └── recursos/                        # Pósters descargables (JPG, comprimidos para web)
│       ├── recurso-loot-boxes.jpg
│       ├── recurso-adiccion-temprana.jpg
│       ├── recurso-lenguaje-comunicacion.jpg
│       ├── recurso-riesgos-0-2.jpg
│       ├── recurso-riesgos-2-anos.jpg
│       └── recurso-conoceme.jpg
└── README.md
```

## Cómo verlo en local

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
   git commit -m "Web de Samu psicólogo gamer"
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

- **Textos**: edita `index.html` — todo el contenido está organizado por
  secciones con comentarios (`<!-- ===== NOMBRE ===== -->`).
- **Datos de contacto**: en la sección `id="hablamos"`, cambia el email, el
  número de WhatsApp (`https://wa.me/...`) y el usuario de Instagram.
- **Redes en el footer**: los enlaces de YouTube y TikTok están como `href="#"`
  — sustitúyelos por tus URLs reales.
- **Recursos**: para añadir un nuevo póster, coloca el archivo en
  `assets/recursos/`, y copia una tarjeta `.recurso-card` en la sección
  `id="recursos"` de `index.html`.
- **Colores**: variables CSS centralizadas en `:root` al principio de
  `styles.css`.

## Accesibilidad y rendimiento

- Navegación por teclado con foco visible.
- Respeta `prefers-reduced-motion`.
- Los pósters de recursos están comprimidos a JPG (~2-2.5 MB → ~250-420 KB
  cada uno) para que la web cargue rápido.
- Totalmente responsive: móvil, tablet y escritorio.
- Sin dependencias externas salvo las tipografías de Google Fonts (Space
  Grotesk + Inter).
