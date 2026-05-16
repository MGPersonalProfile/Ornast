# Desarrollo del frontend — Universo Ornast

Frontend en **Astro 5** + **Tailwind 3** + **Supabase** (preparado, no usado todavía). Deploy en **Vercel**. Contenido en `Libros/` y `Universo/` (separados del código en `src/`).

---

## Requisitos

- Node ≥ 18 (en este repo está probado con Node 24).
- npm.

## Setup inicial

```bash
git clone https://github.com/MGPersonalProfile/Ornast.git
cd Ornast
npm install
cp .env.example .env.local
# rellena .env.local con tus claves de Supabase y Vercel
```

## Desarrollo local

```bash
npm run dev
```

Abre <http://localhost:4321>.

## Build

```bash
npm run build       # incluye astro check (type-checking)
npm run preview     # sirve el build localmente para verificar
```

## Estructura

```
.
├── Universo/                       ← compartido entre todos los libros
│   ├── canon.md                    ← fuente de verdad del universo
│   ├── Mundo/
│   ├── Investigacion/
│   ├── Personajes/                 ← personajes compartidos
│   └── Ilustraciones/
│
├── Libros/                         ← obras del universo
│   ├── cuatro-reinos/
│   │   ├── libro.json              ← metadatos: título, estado, descripción
│   │   ├── masterguide.md          ← biblia del libro
│   │   ├── Borradores/             ← capítulos (.md)
│   │   ├── Personajes/             ← fichas específicas del libro
│   │   └── Esquema/
│   └── dios/
│       ├── libro.json
│       └── masterguide.md
│
├── src/                            ← código del sitio
│   ├── components/                 ← componentes Astro
│   ├── content/
│   │   └── config.ts               ← collections (libros, capítulos)
│   ├── layouts/                    ← Base.astro, Reader.astro
│   ├── lib/                        ← chapters.ts, supabase.ts
│   ├── pages/
│   │   ├── index.astro             ← landing del universo
│   │   └── [libro]/
│   │       ├── index.astro         ← portada de cada libro
│   │       └── [capitulo].astro    ← capítulo individual
│   └── styles/
│       └── global.css
│
├── public/                         ← assets estáticos
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── vercel.json
└── .env.local                      ← NO commitear (en .gitignore)
```

---

## Añadir un capítulo

1. Crear el `.md` en `Libros/cuatro-reinos/Borradores/capitulo_NN_pov.md` con el formato habitual.
2. Añadir el slug al array `capitulos_orden` en `Libros/cuatro-reinos/libro.json`.
3. (En desarrollo) Astro recarga automáticamente. (En producción) hacer commit + push, Vercel deploya solo.

## Añadir un libro nuevo

1. Crear carpeta `Libros/<slug>/`.
2. Crear `libro.json` con los metadatos.
3. Crear subcarpeta `Borradores/` y empezar a escribir capítulos.
4. El frontend lo recoge automáticamente.

---

## Variables de entorno

| Variable | Necesaria | Dónde | Descripción |
|----------|-----------|-------|-------------|
| `PUBLIC_SUPABASE_URL` | sí | dev + Vercel | URL del proyecto Supabase |
| `PUBLIC_SUPABASE_ANON_KEY` | sí | dev + Vercel | Anon key (público, frontend) |
| `SUPABASE_SERVICE_ROLE_KEY` | sí (para backend) | dev + Vercel (encriptada) | Service role. **NO usar en frontend.** |
| `VERCEL_PROJECT_ID` | no | informativo | Project ID de Vercel |

---

## Deploy a Vercel

1. En Vercel, conectar el repo `MGPersonalProfile/Ornast`.
2. Framework preset: **Astro** (detectado automáticamente).
3. Variables de entorno (Settings > Environment Variables), añadir las tres de arriba.
4. Click Deploy.

Cada `git push` a `main` dispara un deploy automático.

---

## Seguridad

- `.env.local` está en `.gitignore`. Nunca lo commits.
- `SUPABASE_SERVICE_ROLE_KEY` da acceso total a la BBDD y se salta RLS. Solo úsalo en código server-side.
- Si la service role key se filtró: regenera en Supabase Dashboard > Project Settings > API > "Reset service role secret" y actualiza en `.env.local` y Vercel.

---

## Atajos de teclado del lector

| Tecla | Acción |
|-------|--------|
| `→` o `J` | Capítulo siguiente |
| `←` o `K` | Capítulo anterior |
| `D` | Cambiar tema |

(Más atajos vendrán con la búsqueda y la wiki.)
