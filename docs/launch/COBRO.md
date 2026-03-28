# Opciones de Cobro — 0kbot

Cómo recibir pagos de clientes en Chile, desde lo más simple hasta lo más completo.

---

## Opción 1: Transferencia bancaria (recomendado para empezar)

**Costo:** $0
**Setup:** Inmediato
**Ideal para:** Todos los proyectos iniciales

### Cómo funciona:
1. El cliente hace transferencia a la cuenta bancaria de 0kbot SpA
2. Tú emites la factura electrónica en SII o Bsale
3. El cliente adjunta la transferencia como comprobante

### Instrucciones de pago estándar (copiar y pegar en propuestas):

```
Datos para transferencia:
Empresa: 0kbot SpA
RUT: [RUT-EMPRESA]
Banco: [BANCO]
Tipo de cuenta: Cuenta corriente
N° de cuenta: [NUMERO]
Email: hola@0kbot.com

Una vez realizada la transferencia, enviar comprobante a hola@0kbot.com
```

**Ventaja:** Sin intermediarios, sin comisión, llega el 100%.
**Desventaja:** Requiere que el cliente tenga RUT y cuenta bancaria chilena.

---

## Opción 2: Mercado Pago

**Costo:** 3.49% + IVA por transacción (tarjeta crédito), menos por débito
**Setup:** 1-2 días hábiles
**Ideal para:** Clientes que prefieren pagar con tarjeta

### Cómo usar:
- Crea cuenta en [mercadopago.cl](https://mercadopago.cl) con el RUT de la SpA
- Genera un link de pago por el monto exacto: **Cobros → Generar link de pago**
- Envías el link al cliente por email o WhatsApp
- El cliente paga con tarjeta (débito o crédito)
- El dinero llega a tu cuenta Mercado Pago en 1-2 días hábiles

**No requiere integración técnica.** Solo generas el link manualmente.

---

## Opción 3: Flow

**Costo:** 1.99% por transacción (débito/crédito)
**Setup:** 3-5 días hábiles (requiere verificación de empresa)
**Ideal para:** Si Mercado Pago resulta caro para transacciones grandes

- Registro en [www.flow.cl](https://www.flow.cl)
- Requiere documentación de la SpA (escritura, RUT, cuenta bancaria)
- Similar a Mercado Pago en funcionamiento

---

## Opción 4: Khipu

**Costo:** Desde 0.99% + IVA (transferencia bancaria facilitada)
**Setup:** 2-3 días
**Ideal para:** Clientes que tienen cuenta bancaria pero prefieren no hacer transferencia manual

- Genera links de cobro que el cliente paga desde su banco
- Más económico que tarjeta de crédito
- Popular en Chile para B2B

---

## Recomendación para empezar

**Fase 1 (primeros 3-6 meses):**
- **Transferencia bancaria** para todos los cobros
- Emite factura en SII o Bsale al recibir cada cuota

**Fase 2 (cuando el volumen lo justifique):**
- Agrega Mercado Pago para dar opción de tarjeta
- Mantén transferencia como opción principal

---

## Facturación

Cada pago recibido debe ir acompañado de una factura electrónica.

### Cómo emitir factura:
1. Entra a [sii.cl](https://sii.cl) → Servicios Online → Facturación electrónica
2. O usa **Bsale** (más cómodo): [bsale.cl](https://bsale.cl) — desde $9.990/mes
3. Datos que necesitas del cliente:
   - Razón social
   - RUT empresa
   - Giro
   - Dirección
   - Email para envío de factura

### Cuándo emitir la factura:
- Emite la factura **al recibir el pago**, no antes
- Si el cliente necesita la factura para pagar (grandes empresas), emítela antes y coordina el pago a 30 días

---

## Template de instrucciones en propuesta

Incluye esto en todas las propuestas comerciales:

```
CONDICIONES DE PAGO

Pago 1 (50% al inicio): $[MONTO] CLP + IVA
Pago 2 (50% al cierre): $[MONTO] CLP + IVA

Forma de pago: Transferencia bancaria a cuenta de 0kbot SpA.
Los datos bancarios se enviarán junto a la firma del contrato.
Emitimos factura electrónica por cada pago recibido.
```
