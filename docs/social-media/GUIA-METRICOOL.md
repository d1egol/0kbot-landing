# Guía: Programar Publicaciones en Metricool

Cómo subir los posts del archivo `posts-redes-sociales.md` a Metricool y programarlos para LinkedIn, Facebook e Instagram.

---

## 1. Conectar las cuentas en Metricool

1. Entra a [app.metricool.com](https://app.metricool.com) y accede con tu cuenta
2. Ve a **Configuración → Redes sociales**
3. Conecta cada red:
   - **LinkedIn**: autoriza el perfil personal Y la página de empresa si tienes (0kbot)
   - **Facebook**: conecta la página de 0kbot (no el perfil personal)
   - **Instagram**: debe estar vinculada como cuenta de empresa a la página de Facebook
4. Verifica que el ícono de cada red aparezca en verde en el panel

> **Tip:** Si Instagram no conecta, verifica en Facebook → Configuración → Cuentas de Instagram que esté vinculada correctamente.

---

## 2. Subir los posts desde `posts-redes-sociales.md`

El archivo en `docs/social-media/posts-redes-sociales.md` tiene los posts organizados por artículo del blog. Para cada artículo hay:
- 1 post de LinkedIn
- 1 post de Facebook
- 1 caption de Instagram + sugerencia de imagen

### Pasos para programar un post:

1. Abre Metricool → **Planificador**
2. Haz clic en **+ Nuevo post**
3. Selecciona las redes donde publicar (LinkedIn, Facebook, Instagram)
4. Copia el texto desde `posts-redes-sociales.md` en el campo de texto
5. Ajusta el texto para cada red si es necesario (ver sección 4 abajo)
6. Agrega la imagen o diseño correspondiente (ver sección 3)
7. Selecciona fecha y hora (ver horarios recomendados abajo)
8. Haz clic en **Programar**

> **Tip:** Metricool permite escribir versiones distintas del mismo post para cada red en la misma pantalla. Usa esa función para ajustar el caption de Instagram vs. el post de LinkedIn sin crear publicaciones separadas.

---

## 3. Imágenes para los posts

Cada post necesita una imagen. Opciones:

### Opción A: Canva (recomendado)
- Usa una plantilla de **post cuadrado (1080x1080)** para Instagram/Facebook
- Usa **1200x627** para LinkedIn
- Incluye el título del artículo + logo de 0kbot + fondo oscuro/azul acorde al estilo del sitio
- Guarda en formato JPG o PNG

### Opción B: Screenshot del artículo del blog
- Abre el artículo en `0kbot.com/blog/[slug]`
- Toma un screenshot de la sección del hero del artículo
- Funciona como imagen provisional si no tienes diseño listo

### Opción C: Imagen de stock (Unsplash/Pexels)
- Busca en [unsplash.com](https://unsplash.com) términos como "business automation", "team working", "warehouse Chile"
- Superpone el título encima en Canva

---

## 4. Ajustes por red social

### LinkedIn
- Tono más profesional, datos y estadísticas funcionan bien
- Hashtags al final (3-5 máximo): `#automatizacion #pymes #Chile #IA #negocios`
- Incluir siempre el link al artículo del blog
- Mejor formato: párrafo corto + lista de puntos + CTA

### Facebook
- Tono más cercano y conversacional
- El link se puede poner en comentarios si quieres más alcance orgánico
- Pregunta al final para generar comentarios: "¿Te ha pasado esto en tu empresa?"
- Hashtags: 2-3 máximo

### Instagram
- El caption va sin link (el link va en bio o en Stories)
- Hashtags: entre 8 y 15, al final o en el primer comentario
- Sugeridos: `#automatizacion #pymes #emprendimiento #chile #negocioschile #emprendedoreschile #tecnologia #IA #WhatsApp #empresas`
- Usa Stories para compartir el post al feed + agrega el link en la Story

---

## 5. Horarios recomendados para Chile

| Red | Mejor día | Mejor horario |
|---|---|---|
| LinkedIn | Martes o miércoles | 8:00–9:30 o 12:00–13:00 |
| Facebook | Miércoles o jueves | 13:00–15:00 |
| Instagram | Martes o viernes | 11:00–13:00 o 19:00–21:00 |

> **Frecuencia recomendada:**
> - LinkedIn: 2-3 veces por semana
> - Facebook: 3-4 veces por semana
> - Instagram: 4-5 veces por semana (incluyendo Stories)

---

## 6. Cómo generar nuevos posts cuando publiques un artículo

Cuando publiques un nuevo artículo en el blog, usa este prompt con Claude para generar los posts:

```
Tengo un nuevo artículo en el blog de 0kbot con este contenido:

Título: [TÍTULO DEL ARTÍCULO]
URL: https://0kbot.com/blog/[SLUG]
Resumen: [PEGA EL RESUMEN O PRIMEROS 2 PÁRRAFOS DEL ARTÍCULO]

Genera:
1. Un post de LinkedIn (tono profesional, datos si hay, 150-200 palabras, 3-5 hashtags)
2. Un post de Facebook (tono conversacional, 100-150 palabras, pregunta al final, 2-3 hashtags)
3. Un caption de Instagram (80-120 palabras, 10-12 hashtags relevantes para pymes Chile)

El tono de 0kbot es: directo, sin jerga corporativa, orientado a dueños de pymes chilenas, basado en resultados reales, no en promesas vagas.
```

---

## 7. Checklist antes de programar

- [ ] Texto copiado y revisado (sin errores de tipeo)
- [ ] Imagen adjuntada (1080x1080 para IG/FB, 1200x627 para LinkedIn)
- [ ] Link al artículo incluido (en LinkedIn y Facebook)
- [ ] Hashtags agregados según la red
- [ ] Fecha y hora configurada según horarios recomendados
- [ ] Vista previa revisada en Metricool antes de programar

---

## 8. Posts disponibles para programar ahora

Los siguientes posts ya están listos en `docs/social-media/posts-redes-sociales.md`:

| # | Artículo | LinkedIn | Facebook | Instagram |
|---|---|---|---|---|
| 1 | IA para Pymes: lo que realmente sirve | ✅ | ✅ | ✅ |
| 2 | 5 señales de que tu operación está sangrando plata | ✅ | ✅ | ✅ |
| 3 | Caso real: distribuidora ahorró $5.8M | ✅ | ✅ | ✅ |
| 4 | Por qué tu empresa vive en WhatsApp | ✅ | ✅ | ✅ |
| 5 | 3 herramientas gratuitas para pymes | ✅ | ✅ | ✅ |

Total: **15 posts listos para subir** (5 artículos × 3 redes).

Recomendación: distribuye 1 artículo por semana → 5 semanas de contenido programado de una vez.
