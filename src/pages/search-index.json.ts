// ============================================================
// Índice de búsqueda estático.
//
// Se genera en build time. El cliente lo descarga al abrir el
// modal de búsqueda. Contiene texto plano de los capítulos +
// metadatos mínimos para enlazar.
// ============================================================

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
  getCapituloNumero,
  getCapituloSlug,
  extraerTitulo,
  parsearTitulo,
} from '@lib/chapters';

/** Convierte el markdown a texto plano legible para indexar. */
function stripMarkdown(md: string): string {
  return md
    // Quitar bloques HTML (verse-block, divs)
    .replace(/<[^>]+>/g, ' ')
    // Quitar marcadores de ACTO
    .replace(/^#\s+ACTO\s+[^\n]+\n+/gm, '')
    // Quitar el primer h1 (título)
    .replace(/^#\s+[^\n]+\n+/m, '')
    // Quitar separadores
    .replace(/^---\s*$/gm, ' ')
    // Quitar headers menores
    .replace(/^#{2,}\s+/gm, '')
    // Quitar énfasis, negritas, cursivas — dejar el texto
    .replace(/\*\*?([^*]+)\*\*?/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Quitar enlaces markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Limpiar espacios múltiples y saltos
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = async () => {
  const libros = await getCollection('libros');
  const capitulos = await getCollection('capitulos');

  const entries = capitulos
    .map((cap) => {
      const libroSlug = cap.id.split('/')[0]!;
      const libro = libros.find((l) => l.id === `${libroSlug}/libro`);
      const numero = getCapituloNumero(cap.id);
      const slug = getCapituloSlug(cap.id);
      const titulo = extraerTitulo(cap.body ?? '');
      const tituloParseado = parsearTitulo(titulo);
      const texto = stripMarkdown(cap.body ?? '');

      return {
        libroSlug,
        libroTitulo: libro?.data.titulo ?? libroSlug,
        numero,
        slug,
        url: `/${libroSlug}/${slug}`,
        nombre: tituloParseado.nombre || (numero === 0 ? 'Apertura' : `Capítulo ${numero}`),
        texto,
      };
    })
    .sort((a, b) => {
      if (a.libroSlug !== b.libroSlug) return a.libroSlug.localeCompare(b.libroSlug);
      return a.numero - b.numero;
    });

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
