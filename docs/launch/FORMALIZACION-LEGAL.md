# Formalización Legal — 0kbot en Chile

Guía para constituir la empresa y quedar operativo para emitir facturas y recibir pagos formalmente.

---

## ¿Qué tipo de empresa elegir?

**Recomendación: SpA (Sociedad por Acciones)**

| Tipo | Para quién | Ventajas | Desventajas |
|---|---|---|---|
| Boleta de honorarios | Persona natural, 1 servicio ocasional | Sin trámite | No es empresa, límites tributarios |
| EIRL | 1 dueño, operación pequeña | Simple | Menos flexible para crecer |
| **SpA** ← recomendada | 1 dueño o más, pensada para crecer | Flexible, profesional, fácil de escalar | Requiere contabilidad |
| SPA con socios | Si en el futuro hay socios | Ideal para levantar capital | Más complejo |

La SpA es la forma más usada por consultoras y startups en Chile. Permite un solo socio, tiene imagen profesional, y es fácil de escalar si entran socios en el futuro.

---

## Paso 1: Constitución vía Empresa en un Día

**URL:** [www.tuempresa.cl](https://www.tuempresa.cl)
**Tiempo:** ~30-60 minutos
**Costo:** Gratuito (sin notario)

### Lo que necesitas antes:
- RUT personal vigente
- Clave Única del Registro Civil (para autenticarse)
- Email personal
- Nombre tentativo para la empresa (ej: "0kbot SpA" o "Diego López Consultores SpA")
- Capital inicial: puede ser $1 peso (no requiere depósito real)

### Pasos en tuempresa.cl:
1. Ingresar con Clave Única
2. Seleccionar **"Sociedad por Acciones (SpA)"**
3. Completar:
   - **Nombre:** "0kbot SpA" (verificar disponibilidad en el mismo sistema)
   - **Objeto social:** Ver sección siguiente
   - **Capital:** $1.000.000 CLP (suficiente para empezar, es solo declarativo)
   - **Administrador:** Tú mismo
4. Revisar y firmar electrónicamente
5. El sistema publica en el Diario Oficial automáticamente

> El RUT de la empresa se genera automáticamente en el proceso.

### Objeto social sugerido:
```
Prestación de servicios de consultoría empresarial, automatización de procesos,
implementación de soluciones tecnológicas, capacitación y asesoría en transformación
digital para empresas. Podrá además realizar cualquier otra actividad lícita de
carácter comercial, industrial o de servicios que los accionistas acuerden.
```

---

## Paso 2: Inicio de actividades en SII

**URL:** [www.sii.cl](https://www.sii.cl) → Servicios online → Inicio de actividades
**Tiempo:** 15-30 minutos
**Costo:** Gratuito

Necesitas el RUT de la empresa (obtenido en el paso anterior).

### Actividades económicas a declarar:
- **Código 749000** — Otras actividades de consultoría de gestión
- **Código 620200** — Actividades de consultoría de informática y gestión de instalaciones informáticas

Marca ambas para tener flexibilidad.

### Tipo de contribuyente:
- Primera categoría (empresa)
- IVA: afecto (emitirás facturas con IVA)
- Régimen: Pro Pyme General (el más simple para empezar)

---

## Paso 3: Timbre electrónico y emisión de documentos

Una vez con inicio de actividades:

1. En SII → **"Timbre electrónico de documentos"** → solicita autorización para **Facturas Electrónicas** (DTE)
2. Usa el sistema gratuito del SII para emitir facturas, o servicios como:
   - **Bsale** (~$15 USD/mes) — recomendado, muy simple
   - **Defontana** — más robusto si creces
   - **SII directo** — gratuito pero interfaz antigua

---

## Paso 4: Cuenta bancaria empresa

Con el RUT de la SpA, abre cuenta en:
- **Banco Estado** — sin costo de mantención, acepta SpA nuevas sin historial
- **Itaú / Santander** — requieren más antigüedad o saldo mínimo
- **Mercado Pago / Khipu** — alternativa para recibir pagos digitales sin cuenta bancaria empresa (ver `COBRO.md`)

---

## Costos recurrentes estimados

| Concepto | Costo mensual aproximado |
|---|---|
| Contabilidad (contador externo) | $50.000–$100.000 CLP |
| Software de facturación (Bsale) | ~$15.000 CLP |
| IVA (19% sobre ingresos) | Variable |
| PPM (Pagos Provisionales Mensuales) | ~2-3% de ingresos |
| Total overhead mínimo | ~$80.000–$130.000 CLP/mes |

> **Tip:** Para el primer año, un contador externo que te ayude con las declaraciones mensuales vale la pena. Costo ~$80K/mes. Busca uno en Workana o por referido.

---

## Impuestos clave a conocer

- **IVA:** Se cobra al cliente (19%) y se declara mensualmente. No es costo tuyo, solo lo cobras y declaras.
- **PPM:** Pago provisional mensual ~2.5% sobre ingresos. Anticipo del impuesto anual.
- **Impuesto anual (abril):** Sobre las utilidades reales del año.
- **Régimen Pro Pyme General:** Contabilidad simplificada, base de caja (ideal para empezar).

---

## Checklist legal

- [ ] SpA constituida en tuempresa.cl
- [ ] RUT empresa anotado en un lugar seguro
- [ ] Inicio de actividades en SII
- [ ] Autorización DTE para facturas electrónicas
- [ ] Cuenta bancaria empresa abierta
- [ ] Contador externo contratado (o al menos identificado)
- [ ] Software de facturación configurado
