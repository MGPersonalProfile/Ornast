# Ilustraciones del Universo Ornast

Imágenes generadas con Gemini siguiendo los prompts de `prompts_gemini.md`.

## Inventario actual

| Archivo | Estado | Uso previsto |
|---------|--------|--------------|
| `aguila_dos_cabezas.png` | ✅ Final | Sello del Imperio (favicon, marcas) |
| `portada_cuatro_reinos.png` | 🔴 **Provisional** | Lleva texto en inglés inventado por Gemini ("Silent Witness — The Tallies of Time — by [Author Name] — A New Translation"). **No usar en frontend hasta regenerar sin texto.** |
| `mapa_continente.png` | 🟡 Usable con typo | Página `/mapa`. Contiene `DURN REN SAKH` en lugar de `DUREN SAKH`. Editar typo manualmente o regenerar cuando convenga. |
| `og_universo_ornast.png` | 🔴 **Provisional** | Ratio incorrecto (salió 1:1, debería ser 1.91:1 = 1200×630). Regenerar con el ratio correcto. |
| `sigilo_casa_varkhen.png` | ✅ Final | Heráldica de Armstrong (cap 9, 19, 32) |
| `punto_control_9.png` | ✅ Final | Banner cabecera del cap 26 |
| `veth_mud_plains.png` | 🟢 Legacy | Imagen original del autor de antes del Sprint visual. |

## Próximos pasos

1. Regenerar `portada_cuatro_reinos.png` sin texto (ver prompt en `prompts_gemini.md`).
2. Regenerar `og_universo_ornast.png` con ratio 1.91:1.
3. Cuando estén, integrar en frontend:
   - Sigilo del águila → reemplaza el SVG abstracto del componente `Eagle.astro`.
   - Portada → card del libro 1 en la home.
   - Mapa → nueva ruta `/mapa` con SVG interactivo superpuesto.
   - OG image → reemplaza el placeholder de `/og/default.png` en `Base.astro`.
   - Sigilo Varkhen → portada del libro cuando Armstrong tenga peso narrativo.
   - Punto de Control 9 → banner opcional al inicio del cap 26.
