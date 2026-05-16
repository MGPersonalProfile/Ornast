// ============================================================
// Utilidades para leer y parsear los capítulos del universo Ornast
// ============================================================

import type { CollectionEntry } from 'astro:content';

export type Capitulo = CollectionEntry<'capitulos'>;
export type Libro = CollectionEntry<'libros'>;

/**
 * Devuelve el libro al que pertenece un capítulo a partir de su ID.
 * El ID del capítulo es algo como "cuatro-reinos/Borradores/capitulo_01_matt".
 */
export function getLibroSlug(capituloId: string): string {
  return capituloId.split('/')[0]!;
}

/**
 * Extrae el número del capítulo a partir del slug del archivo.
 * "capitulo_01_matt" → 1
 * "capitulo_00_prologo" → 0
 */
export function getCapituloNumero(capituloId: string): number {
  const filename = capituloId.split('/').pop() ?? '';
  const match = filename.match(/^capitulo_(\d+)/);
  return match ? parseInt(match[1]!, 10) : -1;
}

/**
 * Extrae un slug "humano" desde el ID (para URLs).
 * "cuatro-reinos/Borradores/capitulo_01_matt" → "01-matt"
 */
export function getCapituloSlug(capituloId: string): string {
  const filename = capituloId.split('/').pop() ?? '';
  // capitulo_01_matt → 01-matt
  return filename.replace(/^capitulo_/, '').replace(/_/g, '-');
}

/**
 * URL canónica de un capítulo.
 */
export function getCapituloUrl(libroSlug: string, capituloId: string): string {
  const slug = getCapituloSlug(capituloId);
  return `/${libroSlug}/${slug}`;
}

/**
 * Determina el acto al que pertenece un capítulo de "cuatro-reinos".
 * Acto 0 (apertura) = cap 0
 * Acto I = caps 1-9
 * Acto II = caps 10-21
 * Acto III = caps 22+
 */
export interface Acto {
  num: string;
  name: string;
  range: [number, number];
  silent?: boolean;
}

export const ACTOS_CUATRO_REINOS: Acto[] = [
  { num: '·', name: 'Apertura', range: [0, 0], silent: true },
  { num: 'I', name: 'El Águila que mira en dos direcciones', range: [1, 9] },
  { num: 'II', name: 'Las costuras se ven', range: [10, 21] },
  { num: 'III', name: 'Nadie dio la orden. Todos dieron la orden.', range: [22, Infinity] },
];

export function getActoDeCapitulo(numero: number, libroSlug: string): Acto | null {
  if (libroSlug === 'cuatro-reinos') {
    return ACTOS_CUATRO_REINOS.find(a => numero >= a.range[0] && numero <= a.range[1]) ?? null;
  }
  return null;
}

/**
 * Convierte un número arábigo en romano (1..3999).
 */
export function toRoman(num: number): string {
  if (num <= 0) return '';
  const map: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let result = '';
  for (const [val, sym] of map) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

/**
 * Extrae el título humano de un capítulo del cuerpo del markdown.
 * Busca el primer h1 ("# Matt — Soldado...") y lo devuelve.
 * Si es un marcador de Acto, lo ignora y busca el siguiente h1.
 */
export function extraerTitulo(body: string): string {
  const lines = body.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const actMatch = trimmed.match(/^#\s+ACTO\s+/i);
    if (actMatch) continue;
    const titleMatch = trimmed.match(/^#\s+(.+)$/);
    if (titleMatch) {
      return titleMatch[1]!.trim();
    }
  }
  return '';
}

/**
 * Parsea el título "Matt — Soldado de tercera línea, Guarnición de Veth, día 214"
 * en sus partes.
 */
export interface TituloParseado {
  nombre: string;
  detalles: string[];
}

export function parsearTitulo(titulo: string): TituloParseado {
  if (!titulo) return { nombre: '', detalles: [] };
  const partes = titulo.split(/\s+[—–-]\s+/);
  const nombre = partes.shift()?.trim() ?? titulo;
  const resto = partes.join(' — ').trim();
  const detalles = resto
    ? resto.split(/\s*,\s*/).map(s => s.trim()).filter(Boolean)
    : [];
  return { nombre, detalles };
}

/**
 * Detecta si un capítulo contiene un marcador de Acto al inicio.
 * Devuelve el número del acto y el nombre, o null.
 */
export function detectarBannerActo(body: string): { num: string; name: string } | null {
  const lines = body.split('\n');
  for (const line of lines.slice(0, 10)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = trimmed.match(/^#\s+ACTO\s+(I{1,3}V?|IV|VI{0,3})\s+[—-]\s+["']?(.+?)["']?$/i);
    if (match) {
      return {
        num: match[1]!.toUpperCase(),
        name: match[2]!.replace(/^["']|["']$/g, ''),
      };
    }
  }
  return null;
}

/**
 * Limpia el cuerpo del markdown para renderizar:
 * - Quita el primer h1 (título, se maneja como chapter-head)
 * - Quita los marcadores de Acto del cuerpo
 * - Quita "*FIN DEL ACTO X*" del final
 */
export function limpiarCuerpo(body: string): string {
  let result = body;
  // Quitar primer h1 y marcadores de Acto
  result = result.replace(/^#\s+ACTO\s+[^\n]+\n+/m, '');
  result = result.replace(/^#\s+[^\n]+\n+/m, '');
  // Quitar separador horizontal inmediatamente posterior
  result = result.replace(/^---\s*\n+/, '');
  // Quitar marcador de fin de Acto al final
  result = result.replace(/\n---\s*\n\s*\*FIN DEL ACTO[^*]+\*\s*$/m, '');
  return result.trim();
}
