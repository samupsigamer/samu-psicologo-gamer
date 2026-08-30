# Samu Psicólogo — Web 2026 integrada

Versión integrada del modelo web 3 con la arquitectura Web 2030: psicología,
gaming, tecnología, recursos, divulgación y un portfolio de UX/research,
en un sitio multi-página estático (HTML + CSS + JS puros, sin frameworks).

## Diseño

- Base visual: fondo oscuro, morado/neón, estética gaming limpia (tipografías
  Space Grotesk + DM Sans).
- Ilustraciones: hero, "Recursos", "Gaming" y "Sobre mí" usan personajes chibi
  con fondo transparente, en vez del póster de infografía original.
- Profesional: "Sobre mí" y "UX / Research" usan una composición más limpia y
  sobria (fondo claro) para dirigirse a un público distinto (colaboradores,
  clientes de UX) del resto del sitio.
- Responsive, accesible y sin dependencias externas (solo Google Fonts).

## Qué se ha mejorado en esta revisión

**Bugs corregidos**
- El menú móvil no abría: el JS añadía la clase `open` a `.header`, pero el
  CSS buscaba `.nav.open nav`. Corregido a `.header.open nav`.
- Los enlaces del footer en las subpáginas apuntaban a rutas incorrectas
  (`../sobre-mi.html` en vez de `sobre-mi.html`).
- La imagen `samu-chibi.png` (un póster de infografía con texto denso, 2.2 MB)
  estaba mal usada como ilustración de héroe/tarjeta en 3 sitios distintos.
  Sustituida por 5 ilustraciones limpias y optimizadas (~2 MB en total)
  específicas para cada sección.

**Contenido**
- Contacto: añadido WhatsApp (antes solo había email + Instagram) y
  eliminado texto de nota interna que aparecía visible para el usuario
  ("los datos están preparados para sustituirse...").
- Eliminadas frases de marcador de posición ("una futura pieza...") en
  Divulgación, sustituidas por descripciones reales + etiqueta "Próximamente".
- Añadido un recurso y filtro de categoría "Psicología" en la biblioteca de
  recursos (antes ausente pese a ser una sección principal del sitio).
- Añadida una sección "Por qué me importan las familias" en Sobre mí,
  que antes no tenía ninguna imagen de apoyo.

**Navegación y accesibilidad**
- Cada subpágina marca ahora su propio enlace activo (`aria-current="page"`);
  antes solo funcionaba en Inicio.
- Añadido skip-link, `aria-expanded` en el botón de menú, `aria-pressed` en
  los filtros de recursos, y estados de foco visibles.
- El botón de menú cambia de icono (☰ / ✕) y se cierra al elegir una
  sección, con Escape o al hacer clic fuera.

**SEO y metadatos**
- Meta description, Open Graph, Twitter Card, `theme-color` y favicon
  añadidos a las 9 páginas (antes solo existían, de forma incompleta, en
  index.html).
- Datos estructurados (JSON-LD) en la portada.
- `robots.txt`, `sitemap.xml` y una página `404.html` con la misma
  identidad visual del sitio.

**Rendimiento**
- Imágenes redimensionadas y cuantizadas: de 2.2 MB en un solo archivo mal
  usado a 5 archivos optimizados (~2 MB en total) usados correctamente.
- `loading="lazy"` en las imágenes fuera del viewport inicial, y
  `width`/`height` en `<img>` para evitar saltos de layout (CLS).

**Robustez del JavaScript**
- `js/main.js` reescrito: cada función (menú, filtros de recursos, año del
  footer) se ejecuta en su propio bloque `try/catch`, así que un fallo en
  una no puede romper las demás. Se usa `Array.prototype.forEach.call(...)`
  en vez de `NodeList.forEach` directo para maximizar la compatibilidad.

## Estructura

```
.
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── pages/
│   ├── sobre-mi.html
│   ├── psicologia.html
│   ├── tecnologia.html
│   ├── gaming.html
│   ├── recursos.html
│   ├── divulgacion.html
│   ├── ux.html
│   └── contacto.html
├── css/styles.css
├── js/main.js
├── data/resources.js
└── assets/img/
    ├── samu-hero.png        # Hero de la portada (Samu adulto, transparente)
    ├── samu-recursos.png    # Sección "Recursos" de la portada
    ├── samu-gaming.png      # Página Gaming
    ├── samu-familia.png     # Página Sobre mí
    └── favicon.png
```

## Cómo verlo en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio:

   ```bash
   git init
   git add .
   git commit -m "Web de Samu Psicólogo"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/samu-psicologo.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment", elige **Deploy from a branch**, rama `main` y
   carpeta `/ (root)`.
5. Tu web quedará publicada en `https://TU-USUARIO.github.io/samu-psicologo/`.

## Pendiente de personalizar antes de publicar

- Email real (actualmente `hola@samupsigamer.com` en todas las páginas).
- Número de WhatsApp real (actualmente `https://wa.me/000000000`).
- Dominio real: sustituye `https://samupsicologo.example.com` en los
  `<link rel="canonical">`, `og:url`/`og:image`, `robots.txt` y
  `sitemap.xml` por tu dominio definitivo.
- Enlaces de YouTube y TikTok en el footer (actualmente `href="#"`).
- Textos profesionales definitivos (formación, colegiado, especialización).
- Recursos/artículos reales para sustituir los de `data/resources.js`.
