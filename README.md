# 🦅 UNIVERSO ORNAST

*Proyecto de escritura creativa multi-libro. Dark fantasy político-coral con magia funcional. Anti-Tolkien, pro-Vietnam.*

---

> *Los hombres muertos no cuentan historias.*
> *Los niños vivos no tienen poder.*
> *Las mujeres nunca tendrán gloria.*
> *Pero si hay algo que todo el pueblo sabe,*
> *es que Dacius Maximiliano va a caer.*

---

## 📁 Estructura del proyecto

```
Escritura creativa/
│
├── 🦅 Universo/                            ← Compartido por todas las obras
│   ├── canon.md                            ← Fuente de verdad del universo
│   ├── Mundo/                              ← Geografía, política, magia, economía
│   ├── Investigacion/                      ← Referentes históricos, vida cotidiana
│   ├── Personajes/                         ← (vacío) Personajes compartidos entre libros
│   └── Ilustraciones/                      ← Imágenes del mundo
│
├── 📚 Libros/                              ← Obras del universo
│   │
│   ├── cuatro-reinos/                      ← ▶ ACTIVO
│   │   ├── masterguide.md                  ← Biblia del libro
│   │   ├── masterguide.docx                ← Versión Word (legacy)
│   │   ├── Borradores/                     ← Capítulos (23 + apertura)
│   │   ├── Personajes/                     ← Fichas
│   │   └── Esquema/                        ← Estructura, estilo, dossier editorial
│   │
│   └── dios/                               ← ◌ PLANEADO
│       └── masterguide.md                  ← Planeación inicial
│
├── 🌐 lector/                              ← Frontend web del universo
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── iniciar.bat                         ← Doble clic para lanzar
│   ├── iniciar.ps1
│   └── LEER.md                             ← Instrucciones
│
├── .claude/                                ← Configuración del asistente
└── README.md                               ← Este archivo
```

---

## 🌍 El universo

**Ornast** es el universo narrativo. Lleva el nombre del fundador del Imperio (Maximiliano Ornast) — el universo se nombra por el poder cuya caída es el tema. Ver `Universo/canon.md` para la fuente de verdad: principios narrativos, hechos canónicos, geografía compartida, cronología grande.

---

## 📖 Obras

### `Libros/cuatro-reinos/` — ▶ Activo

**Historia de cuatro reinos y un ducado.** Novela coral. ~500.000 palabras objetivo (100-150 capítulos). 23 capítulos + apertura escritos. Acto III en curso.

Prosa McCarthy / Grossman. Tres actos:
- I (caps 1-9): El Águila que mira en dos direcciones.
- II (caps 10-21): Las costuras se ven.
- III (cap 22 en adelante): Nadie dio la orden. Todos dieron la orden.

### `Libros/dios/` — ◌ Planeado

**Dios** (título provisional). Novela corta hagiográfica. Vida de Maximiliano Ornast contada por un cura excomulgado por escribirla. Tono opuesto a *Cuatro Reinos*: grandilocuente, oficial, irónicamente devoto. Ver `Libros/dios/masterguide.md`.

---

## 🌐 Lector web

Doble clic en `lector/iniciar.bat` (Windows + Python). Abre el navegador en `http://localhost:8765/lector/`. Ver `lector/LEER.md` para detalle.

Plan: migrar a Astro + desplegar en Vercel cuando la base esté.

---

## 🏷️ Etiquetas para notas en el texto

| Etiqueta | Uso |
|----------|-----|
| `TODO` | Tarea pendiente |
| `REVISAR` | Fragmento que necesita revisión |
| `CONTINUIDAD` | Posible error de continuidad |
| `INVESTIGAR` | Requiere investigación adicional |
| `IDEA` | Idea nueva para explorar |
| `REESCRIBIR` | Fragmento que necesita reescritura |
| `NOTA` | Nota general del autor |

---

## 🚩 Flag de trazabilidad IA

- **Caps 1-15 (*Cuatro Reinos*)**: Claude Opus.
- **Caps 16-23 (*Cuatro Reinos*)**: Gemini 1.5 Pro (borrador) → reescritos por Claude Opus tras auditoría tonal.
- **Caps 24 en adelante**: Claude Opus.
- **Apertura del lector**: Claude Opus.
- **Canon del universo y masterguide de Dios**: Claude Opus.

Esta marca se mantiene para evaluar consistencia entre motores. Ver `Libros/cuatro-reinos/Esquema/notas_de_proceso.md` para detalle.

---

*Dark fantasy de verdad: oscuro no por gore sino por honestidad.*
