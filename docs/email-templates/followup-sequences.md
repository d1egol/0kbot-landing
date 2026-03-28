# Secuencia de Follow-up — Prospección 0kbot

Emails de seguimiento para cuando el prospecto no respondió al email inicial.
Reemplaza `[Nombre]`, `[Empresa]`, `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot` antes de enviar.

> **Regla:** Máximo 3 intentos (email inicial + 2 follow-ups). Si después del 3er mensaje no hay respuesta, se cierra el ciclo.

---

## Estructura de la secuencia

```
Día 0:   Email inicial (ver templates por rubro en email-templates/)
Día 4:   Follow-up #1 — breve, diferente ángulo
Día 10:  Follow-up #2 — cierre de ciclo, abre puerta a futuro
```

---

## FOLLOW-UP #1 (día 4 sin respuesta)

**Asunto:** `Re: [mismo asunto del email inicial]`

*(Responder en el mismo hilo, no abrir nuevo)*

```
Hola [Nombre],

Solo quería ver si te llegó mi mensaje anterior. A veces se pierde en la bandeja.

En caso de que no, en resumen: ayudamos a empresas como [Empresa] a automatizar sus procesos más repetitivos — WhatsApp, cotizaciones, seguimiento de clientes, reportes. El resultado habitual es recuperar entre 10 y 20 horas semanales sin contratar a nadie nuevo.

¿Tendría sentido hablar? https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot

Saludos,
Diego Leiva
0kbot — hola@0kbot.com
```

---

## FOLLOW-UP #2 (día 10 sin respuesta)

**Asunto:** `[Empresa] — cerrando el ciclo`

*(Nuevo hilo. Tono más directo, sin presión)*

```
Hola [Nombre],

Intenté contactarte un par de veces. No quiero insistir más si no es el momento.

Solo te dejo esto por si cambia en el futuro: si en algún momento [Empresa] necesita reducir trabajo manual repetitivo, o quiere mejorar el tiempo de respuesta a clientes sin contratar más personas, estamos acá.

Puedes agendar cuando quieras: https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot

Y si hay un mejor momento para hablar (próximo trimestre, después de temporada, etc.), con gusto me avisas.

Suerte con el negocio,
Diego Leiva
0kbot — hola@0kbot.com | www.0kbot.com
```

---

## Variantes por rubro para Follow-up #1

Cambia la segunda parte según el rubro del prospecto:

**Retail / Comercio:**
> *"...ayudamos a empresas de comercio y distribución a automatizar la gestión de pedidos, cotizaciones y seguimiento de despachos por WhatsApp."*

**Servicios Profesionales:**
> *"...ayudamos a estudios y empresas de servicios a automatizar el agendamiento, los recordatorios de citas y el seguimiento de clientes."*

**Construcción / Inmobiliaria:**
> *"...ayudamos a constructoras a automatizar el seguimiento de obras, la coordinación con subcontratistas y la generación de reportes."*

**Logística / Transporte:**
> *"...ayudamos a empresas de logística a reducir las consultas de estado de envío y automatizar las notificaciones a clientes."*

---

## Si responden pero dicen "no por ahora"

```
Asunto: Re: [mismo hilo]

Hola [Nombre],

Gracias por responder. Entendido completamente.

¿Hay un mejor momento para retomar? Puedo anotarlo y escribirte en [mes/trimestre que indiquen].

Si mientras tanto quieres ver cómo lo hemos hecho con empresas similares a [Empresa], te dejo este caso: https://0kbot.com/blog/casos-exito-automatizacion

Saludos,
Diego
```

---

## Si responden y quieren más información antes de agendar

```
Asunto: Re: [mismo hilo]

Hola [Nombre],

Con gusto. Te resumo cómo funciona:

1. **Diagnóstico gratuito (30 min):** Revisamos los procesos actuales de [Empresa] e identificamos cuáles tienen mayor potencial de automatización.
2. **Propuesta:** Te presentamos un plan concreto con el proceso a automatizar, el tiempo estimado y el resultado esperado.
3. **Implementación:** Si avanzamos, el proceso completo toma entre 8 y 12 semanas.

Sin compromiso hasta el paso 3. Puedes agendar el diagnóstico aquí: https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot

¿Alguna pregunta antes de agendar?

Saludos,
Diego
```

---

## Registro de seguimiento (sugerencia)

Lleva un registro simple de cada prospecto:

| Empresa | Contacto | Rubro | Email inicial | F1 enviado | F2 enviado | Estado |
|---------|---------|-------|--------------|-----------|-----------|--------|
| ... | ... | ... | Fecha | Fecha | Fecha | Sin resp / Interés / No ahora / Cerrado |

Puedes usar Google Sheets o Notion para esto.

---

## Qué NO hacer

- Enviar más de 3 emails en total (queda como spam)
- Enviar follow-ups con menos de 3 días de diferencia
- Usar asuntos agresivos como "¿Viste mi email?" o "Última oportunidad"
- Cambiar de tono entre emails (si empezaste formal, mantén formal)
- Escribir párrafos largos en los follow-ups — cuanto más breve, mejor
