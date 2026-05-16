import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// Content collections del Universo Ornast
//
// Los archivos viven fuera de src/ (en Libros/ y Universo/)
// para mantener separados el "repo del autor" del "repo del sitio".
// El glob loader resuelve `base` desde la raíz del proyecto.
// ============================================================

// --- Libros ---------------------------------------------------
// Manifiestos de libros con metadatos (slug, título, estado, etc.)

const libros = defineCollection({
  loader: glob({
    base: './Libros',
    pattern: '*/libro.json',
  }),
  schema: z.object({
    titulo: z.string(),
    titulo_corto: z.string().optional(),
    subtitulo: z.string().optional(),
    estado: z.enum(['activo', 'planeado', 'completado']),
    tipo: z.enum(['novela', 'novela_corta', 'cronica', 'cuento']),
    orden_publicacion: z.number(),
    orden_cronologico: z.number(),
    descripcion: z.string(),
    descripcion_larga: z.string().optional(),
    voz_tonal: z.string().optional(),
    referentes: z.array(z.string()).optional(),
    capitulos_orden: z.array(z.string()).default([]),
  }),
});

// --- Capítulos ------------------------------------------------
// Los markdown viven en Libros/<slug>/Borradores/

const capitulos = defineCollection({
  loader: glob({
    base: './Libros',
    pattern: '*/Borradores/*.md',
  }),
  schema: z
    .object({
      titulo: z.string().optional(),
      pov: z.string().optional(),
      acto: z.number().optional(),
      coral: z.boolean().optional(),
      apertura: z.boolean().optional(),
    })
    .partial(),
});

export const collections = {
  libros,
  capitulos,
};
