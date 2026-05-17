# Prompts para Gemini — Universo Ornast

*Estética común a todas: grabado antiguo, papel envejecido, simbólico no figurativo. Cero Hollywood, cero Marvel, cero fantasy colorista. Más cerca de Penguin Modern Classics, NYRB y los grabados al aguafuerte del siglo XVI–XVIII.*

**Paleta común:** sepia, tinta marrón muy oscura, ocre, sangre seca (#a23e2a), papel envejecido (#f1e8d2 a #1a1410). Sin azules brillantes, sin violetas, sin oros saturados.

---

## 1. Sigilo del Águila de Dos Cabezas

**Uso:** símbolo principal de la web. Aparece en favicon, OG image, portada, marca de cierre de capítulos.

**Prompt:**

```
A heraldic emblem of a stylized double-headed eagle, both heads facing
opposite directions in profile. Engraved in the style of a 16th century
European wax seal or coin engraving. Symbolic, geometric, NOT
photorealistic. The eagle is rendered with fine etched lines, austere
and powerful, with the two heads symmetrical and the wings spread but
abstract — not feathered in detail. Round composition, centered on a
medallion. Color palette: dark sepia ink on aged ivory paper, with one
subtle dried-blood crimson accent in the eye or center. Background:
slightly textured aged parchment, no decorative borders, no text.
Inspired by: Albrecht Dürer engravings, heraldic seals of the Holy
Roman Empire, Penguin Classics cover medallions. Avoid: bright colors,
photorealism, fantasy art, gold leaf, Marvel-style, anime, modern flat
illustration, gradients. Aspect ratio: 1:1 square. Resolution: 2048×2048.
```

**Variaciones que merece la pena probar:**
- Una con el águila más "rota" o erosionada (sello viejo, no nuevo)
- Una con un libro abierto debajo del águila (sello de la Casa Maximiliano,
  para *Dios*)

---

## 2. Portada del Volumen 1 — "Historia de cuatro reinos y un ducado"

**Uso:** card del libro en la landing, OG image al compartir capítulos,
portada PDF/EPUB cuando se exporte.

**Imagen única, austera. Lo que importa es lo que NO tiene.**

**Prompt:**

```
A book cover in the style of Penguin Modern Classics or NYRB Editions.
Austere, restrained, literary — not commercial fantasy. Composition:
centered on a single object — a wooden post or marker stake with many
small parallel notches carved into it, standing alone in an empty
muddy plain under an overcast grey sky. The post is rough, weathered.
The notches are dense and irregular, suggesting many days counted.
No human figures. No castles. No dramatic weather. The horizon is a
flat horizontal line. Style: aquatint etching or 19th century historical
engraving, monochromatic with one subtle warm accent. Color palette:
warm sepia, aged ivory paper, dark brown ink, with a single muted
dried-blood red mark visible only in close inspection. Mood: silent
witness, accumulated time, oppressive plain. Inspired by: woodcut
illustrations of the Thirty Years War, Goya's Disasters of War,
Penguin Classics covers of 20th century war literature (Grossman,
Babel, Roth). Avoid: dragons, swords, soldiers in foreground, colorful
banners, fantasy heroes, dramatic lighting, gold accents, magical
elements, anime, photorealism. Aspect ratio: 2:3 portrait
(traditional book cover). Resolution: 1600×2400.
```

**Si Gemini insiste en meter elementos fantásticos:** añadir al prompt
`historical realism, no fantasy elements whatsoever, 19th century
naturalistic engraving only`.

---

## 3. Mapa del continente Ornast

**Uso:** ilustración interactiva en la futura página `/mapa`. Imagen base
para superponer SVG con tooltips.

**Prompt:**

```
A fantasy continent map drawn in the style of historical 17th–18th
century cartography. Aged parchment background, hand-drawn ink lines,
sepia and dark brown only. NO colorful illustrations of monsters or
castles. Composition:

- Center-north: a large continent.
- A capital city marked 'Ornast' near the center, drawn as a small
  circular walled town with a tiny double-headed eagle banner.
- Four neighboring labeled regions surrounding Ornast:
  * 'Kethara' to the north — mountainous, drawn with small triangular
    peaks and tiny mine entrances.
  * 'Solmara' to the west — coastal, with a sea bordering it and tiny
    sailing ships in the water.
  * 'Veth' to the south-center — flat plains, drawn with horizontal
    stippling and tiny wheat-stalk marks.
  * 'Duren Sakh' to the south-east — desert, drawn with stippled
    dunes and a few tiny date palms.
- A smaller region labeled 'Armstrong' (with a parenthetical name in
  italics underneath: 'Eirenholm') to the far west, separated from the
  main continent by a river. Coastal.
- Far west across the river: a much larger region labeled 'Imperio de
  Valdren', drawn faintly, going off the edge of the map.
- A bold compass rose in the lower-right corner, baroque style.
- Tiny ornamental cartouche in the upper-left with the title 'ORNAST'
  in Cinzel-style Roman capitals.
- Tiny scale bar in the lower-left.

Style: ink hatching, NOT digital painting. Like a real antique map you
could fold and put in a drawer. Color palette: sepia, dark brown,
black ink on aged ivory paper. NO blues, NO greens, NO bright colors.
Inspired by: Ortelius atlases, Speed's atlases, Tolkien's Middle-earth
map by Christopher Tolkien, the maps in The Name of the Rose. Avoid:
modern digital cartography, satellite-style maps, dragons in the
oceans, color illustrations, anime, fantasy MMO-style maps. Aspect
ratio: 4:3 landscape. Resolution: 2400×1800.
```

**Notas:**
- Si Gemini se equivoca en posiciones, regenerar describiendo la
  geografía con direcciones cardinales más simples.
- Lo importante es que el continente se vea **plausible** y **viejo**,
  no precioso.

---

## 4. OG Image default — Universo Ornast

**Uso:** preview cuando alguien comparte cualquier link del sitio en
Twitter, WhatsApp, Reddit, Slack, etc. Imagen 1200×630 (estándar).

**Prompt:**

```
A social media preview banner, austere and literary. Composition:
- Centered horizontally: a small stylized double-headed eagle emblem
  in dried-blood crimson ink, the same heraldic style as the favicon.
- Below the eagle: the title 'UNIVERSO ORNAST' in elegant Roman
  small-caps inscription, like an engraved monument plaque or the
  Trajan column inscription style.
- Background: warm aged sepia/ivory parchment texture, slightly
  vignetted at the edges (darker corners).
- No tagline. No subtitle. No book covers. No additional graphics.
- Generous negative space.
Style: minimalist literary, like a Penguin Classics or NYRB Editions
title plate. Atmospheric. Restrained.
Color palette: aged ivory paper background, dark brown ink for the
typography, dried-blood crimson (#a23e2a) for the eagle only.
Inspired by: book frontispieces of the early 1900s, monumental
inscriptions on Roman buildings, library plaques. Avoid: modern web
design, gradients, sans-serif fonts, dramatic photography, fantasy
imagery, colorful overlays. Aspect ratio: 1.91:1 (1200×630 exactly).
Resolution: 1200×630.
```

---

## Opcional (Sprint 3 / cuando haya tiempo)

### Sigilo de la Casa Varkhen

Para el cuadro de Elara y futuras escenas en Armstrong.

```
A noble house heraldic emblem: a stag standing in profile over a
horizontal river line. Engraved in the style of medieval English
heraldic illustration, austere, on a shield or oval medallion. Dark
ink on aged parchment, one subtle gold accent only on the stag's
collar. No additional ornaments. The composition is simple: stag, river,
nothing else. Style: 15th century English heraldic manuscript
illustration, like the Rous Roll. Aspect ratio: 1:1. Resolution:
2048×2048.
```

### Atmósfera del Punto de Control 9 (cabecera de cap)

Para usar como banner pequeño en el cap 26.

```
An atmospheric illustration of a muddy village square in the rain. A
single large bare tree in the center. A stone well to one side. A
small humble stone chapel in the background with a tiny double-headed
eagle painted on its door. Five subtle marks on the tree trunk —
horizontal lines as if rope had been there. No human figures, no
bodies, no violence shown — only the empty aftermath. Style: ink wash
illustration, monochromatic, the rain rendered as fine diagonal
lines. Mood: heavy, silent, witness. Inspired by: Goya's etchings of
the Spanish War of Independence, Käthe Kollwitz prints. Aspect ratio:
3:1 wide banner. Resolution: 2400×800.
```

---

## Configuración técnica para Gemini

- En el prompt de Gemini, **siempre** incluir la frase `aspect ratio
  X:Y, resolution AxB` al final, para forzar tamaño.
- Si la primera generación se ve "demasiado fantasy" o "demasiado
  colorida", añadir al inicio del prompt:
  `In the strict style of historical engraving only, monochromatic
  sepia and ink, NO modern color illustration, NO fantasy art style.`
- Si la imagen sale fea o desordenada, regenerar 3-4 veces. Gemini
  varía bastante.
- Para el mapa, probablemente harán falta 5–10 generaciones para
  conseguir una con los nombres y posiciones correctas. Considera
  generar los nombres aparte (tipografía digital) y superponerlos
  después en Figma o Photoshop sobre la imagen base.

## Una vez generadas

1. Guardar en `Universo/Ilustraciones/` con nombres descriptivos:
   - `aguila_dos_cabezas.png`
   - `portada_cuatro_reinos.png`
   - `mapa_continente.png`
   - `og_universo_ornast.png`
2. Pasarme las imágenes y las integro en el frontend:
   - El sigilo sustituye al SVG abstracto del Eagle component.
   - La portada va en la card del libro 1.
   - El mapa va en una nueva ruta `/mapa`.
   - La OG image reemplaza el placeholder de `/og/default.png`.
