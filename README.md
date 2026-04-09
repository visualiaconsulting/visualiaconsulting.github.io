# visualiaconsulting.github.io

Landing page estática de **Visualia Consulting** alojada en [GitHub Pages](https://visualiaconsulting.github.io).

---

## 🗂 Estructura de archivos

```
visualiaconsulting.github.io/
├── index.html          # Página única (Hero, Servicios, Proyectos, Proceso, Stack, About, Contacto)
├── assets/
│   ├── styles.css      # Estilos (responsive, dark theme, accessible)
│   ├── main.js         # Toggle ES/EN, scroll-spy, menú hamburguesa
│   └── favicon.svg     # Ícono SVG del sitio
└── README.md           # Este archivo
```

---

## 🚀 Despliegue en GitHub Pages

1. Asegúrate de que el repo se llama exactamente **`visualiaconsulting.github.io`** y es **público**.
2. Ve a **Settings → Pages**.
3. En *Source*, selecciona **Deploy from a branch → main → / (root)**.
4. Haz clic en **Save**.
5. En ~1 minuto tu sitio estará en `https://visualiaconsulting.github.io`.

> No requiere build tools, Jekyll ni ningún workflow adicional. GitHub Pages sirve el HTML estático directamente.

---

## ✏️ Personalización

### Contacto

Edita `index.html` y busca los comentarios `<!-- TODO: -->`:

```html
<!-- TODO: Replace with your real email address -->
<a href="mailto:contacto@visualiaconsulting.com">
  contacto@visualiaconsulting.com
</a>

<!-- TODO: Replace with your real LinkedIn URL -->
<a href="https://www.linkedin.com/company/visualiaconsulting" ...>
```

### Idiomas (ES / EN)

Todas las cadenas de texto están en `assets/main.js`, en el objeto `i18n`:

```js
const i18n = {
  es: { "hero.sub": "Transformamos datos...", ... },
  en: { "hero.sub": "We turn data...",        ... },
};
```

Añade o modifica entradas en ambos idiomas. En el HTML, usa el atributo `data-i18n="clave"`.

### Agregar un proyecto

Copia uno de los bloques `<article class="project-card">` en `index.html` y:

- Cambia el `data-i18n` de `<h3>` a una nueva clave (p. ej. `proj13.title`).
- Añade la traducción en `assets/main.js` para `es` y `en`.
- Si es público, incluye el `<a class="project-link" href="...">`.
- Si es privado, omite el enlace y usa `<span class="badge badge-private">`.

### Agregar un servicio

Copia un `<article class="service-card">` y sigue el mismo patrón de `data-i18n`.

### Favicon / colores

- Favicon: edita `assets/favicon.svg` (SVG puro, sin dependencias).
- Colores: cambia las variables CSS en `:root { }` al inicio de `assets/styles.css`.

---

## 🛠 Tecnologías usadas

- HTML5 semántico
- CSS custom properties + CSS Grid/Flexbox
- JavaScript vanilla (sin frameworks)
- GitHub Pages (hosting gratuito)

---

## 📄 Licencia

MIT — úsalo y adáptalo libremente.

