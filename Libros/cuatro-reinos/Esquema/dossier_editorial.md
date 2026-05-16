# DOSSIER EDITORIAL — Pase de revisión completo (caps 1-23)

*Fase 1: Diagnóstico. Antes de tocar el manuscrito.*

---

## 0. Marco del trabajo

**Hallazgo orientador (de `Esquema/notas_de_proceso.md`):**

> 🚩 Caps 1-15 → escritos con **Claude Opus**.
> Caps 16-23 → escritos con **Gemini 1.5 Pro**.
> El autor monta este experimento para evaluar consistencia entre motores.

Esto reordena las prioridades:

- **Acto I (caps 1-15)** es el patrón tonal. Intervención **mínima**: solo continuidad, planting de cicatriz, errores de canon. No tocar voz.
- **Caps 16-23 (Gemini)** necesitan **alineación de voz al patrón Opus**. Hay drift identificable: aperturas ensayísticas, retórica épica, aforismos narratoriales que el patrón Opus no se permite.
- El criterio único es **el de la `Esquema/guia_de_estilo.md`**, no preferencias estéticas mías.

---

## 1. Decisiones que requieren input del autor

Antes de empezar a editar necesito que decidas estas cinco:

### 🔴 D1. Armstring vs Armstrong

Inconsistencia masiva en todo el proyecto:

| Forma | Ocurrencias | Dónde manda |
|-------|-------------|-------------|
| **Armstring** | 31 en 7 archivos | `masterguide_cuatro_reinos.md`, `atlas.md`, `personajes_principales.md`, `estructura_narrativa.md` (biblia mayor) |
| **Armstrong** | 40 en 17 archivos | `mapa_relaciones.md`, varios docs de `Mundo/`, **borradores caps 5, 9, 13, 19** |

La biblia principal dice **Armstring**. Los borradores y el resto dicen **Armstrong**. Hay que elegir UNO y purgar el otro. **Recomendación:** elegir el que te suene más natural en voz alta. "Armstrong" suena anglosajón / militar real; "Armstring" tiene textura más extraña, más fantasía. Tú decides — yo lo aplico con find/replace masivo.

### 🔴 D2. La cicatriz de Matt

Cap 23 (Reva describe al soldado del pan): *"Un soldado. El grande. El de la cicatriz en la mejilla. El que siempre mira al suelo cuando requisan."*

Pero **Matt no tiene cicatriz establecida en ningún capítulo previo** (1, 6, 12, 15, 18). Tampoco aparece en su ficha (`Personajes/matt.md`).

Opciones:
- **A** (mi recomendación): plantar la cicatriz retroactivamente en cap 1 (un detalle físico sobrio, p.ej. una línea blanca en la mejilla — recuerdo de Kethara antes del reclutamiento). Funciona tonalmente y refuerza el linaje de minero.
- **B**: cambiar la descripción en cap 23 a algo ya plantado: "El alto. El que siempre mira al suelo cuando requisan." (sin cicatriz).
- **C**: dejarlo como está y aceptar la inconsistencia (no recomendado).

### 🔴 D3. Estructura de Actos

El cap 8 termina con `*FIN DEL ACTO I*`. El cap 9 abre con `# ACTO II — "Las costuras se ven"`. Pero `Esquema/estructura_narrativa.md` y `capitulos_detallados.md` dicen que el **Acto I llega hasta el cap 15**. Hay dos versiones de la estructura conviviendo:

- **Versión A (manuscrito):** Acto I = caps 1-8 / Acto II = cap 9 en adelante.
- **Versión B (esquema):** Acto I = caps 1-15 / Acto II = cap 16 en adelante.

Tienes que escoger. Mi lectura: el cap 8 (Dacius leyendo el cuaderno de Aldous) es un cierre potente del "establecimiento del mundo", pero los caps 9-15 todavía están en modo "presentación / grietas iniciales". Yo me iría a una **versión C: Acto I = caps 1-9 / Acto II = caps 10-22 / Acto III = a partir de la rebelión de los niños o de la carta del emperador**. Pero esto es decisión tuya. Cuando me digas, ajusto los marcadores.

### 🟡 D4. El cap 22 (Los Niños)

Es el coro del Acto III (cuatro niños rebeldes: Tilo / Elia / Jarek / la chica del Anillo Exterior). El **concepto** es brillante. La **ejecución** tiene problemas serios de voz vs el cap 4 (el otro coral):

- Apertura sentenciosa: *"Los adultos mueren despacio porque tienen la cabeza llena de reglas... la paciencia es el sedante de los cobardes."* → ensayo, no escena.
- Aforismos narratoriales: *"Elia tiene once años y ha llegado a una conclusión teológica perfecta: si el Héroe no viene a darles de comer, tendrán que comerse a los sacerdotes."* → el narrador hace retórica con la voz de la niña.
- Tono apocalíptico: *"Así que algo tiene que arder. Todo va a arder."* / *"el ruido de los cristales rotos es música, la primera canción honesta que se ha cantado en Ornast en sesenta años."* → épica, contra el principio "registro frío".

¿Reescribo el cap entero alineándolo al modelo del cap 4 (fragmentos íntimos, sin glosa narratorial, las acciones de los niños sin sentencia moral)? Es un trabajo grande, pero el cap 4 es la guía. Es la decisión más cara del dossier.

### 🟡 D5. Cap 20 — "su abuelo antes de ordenar una carga de caballería"

Cita literal: *"Sintió miedo. Un terror profundo y vertiginoso... Pero debajo de ese miedo, sintió otra cosa. El mismo cosquilleo eléctrico, la misma vitalidad pura que seguramente sintió su abuelo antes de ordenar una carga de caballería."*

El masterguide es explícito: *"No tiene un villain con capa, no tiene un elegido... No es Tolkien. Es Vietnam."* La comparación con Maximiliano Ornast cargando a caballo es heroificación pura del abuelo conquistador, que la novela trata como Alejandro Magno trágico, no como héroe. Mi voto: **cortar la frase entera**. La sensación de Dacius está mejor servida sin esa comparación. ¿OK?

---

## 2. Hallazgos críticos por capítulo

### Cap 1 — Matt (Opus) ✅
Excelente. Modelo tonal del proyecto. No tocar excepto si decides D2-A (cicatriz).

### Cap 2 — Dacius (Opus) ✅
Excelente. Soren plantado con la perfección justa. No tocar.

### Cap 3 — Reva (Opus) ✅
Excelente. El gallo vendido es el setup para el cap 8 (Enn). No tocar.

### Cap 4 — El pueblo sabe (Opus) ✅
Modelo del coral. Las cuatro voces tienen ritmo propio. No tocar. **Esta es la referencia para reescribir el cap 22.**

### Cap 5 — Lena (Opus) 🟡
Excelente prosa. Único problema: usa **"Armstrong"** (3 veces) — corregir según D1.

### Cap 6 — Matt 2 (Opus) 🟡
Excelente excepto **una línea metaficcional**:

> *"Doscientos veintiocho días. Catorce más que la última vez que el lector lo vio, aunque Matt no pensaba en lectores ni en 'últimas veces.'"*

El narrador se dirige al lector. Rompe el registro de crónica. **Cortar y empezar el segundo párrafo con "Doscientos veintiocho días. Catorce más desde la última muesca del poste."** o algo así.

### Cap 7 — Zahira (Opus) ✅
Bien. Pequeño cuidado: el cap 16 introduce que la **bolsa de lectura es del padre** muerto a los 14. Cap 7 dice que **la abuela enseñó**. No es contradictorio (padre da el objeto, abuela enseña), pero conviene una línea en cap 7 mencionando al padre o el catalejo para suavizar la transición a cap 16.

### Cap 8 — Dacius 2 (Opus) ✅
Excelente. Es el corazón del Acto I. El gallo rojo de Reva (cap 3) → Enn (cap 8) → Aldous reportando → Dacius leyendo. Cierre magistral. Único problema: el marcador `*FIN DEL ACTO I*` (ver D3).

### Cap 9 — Elara (Opus) 🟡
Bien, pero:
- Encabezado dice `Casa Varkhen, Armstrong` → ver D1.
- "Aldric Varkhen" (padre de Elara) tiene **el mismo nombre que el General Aldric Voss** del cap 2. Es probable que el lector los confunda. **Recomendación:** renombrar al padre de Elara (p.ej. Halric Varkhen, o Aldrec).

### Cap 10 — Aldous (Opus) ✅
Magistral. La economía del recorte (16 águilas), la rebelión silenciosa, la ironía de la profecía. No tocar.

### Cap 11 — Reva 2 (Opus) 🟡
Excelente prosa salvo **un único párrafo problemático**:

> *"...la naturaleza de un cuerpo que todavía no sabe que 'ya no hay' no es una ley del universo sino una consecuencia de la política imperial de extracción tributaria exacerbada por una crisis de suministro causada por un conflicto bélico en el extremo occidental del continente que nadie en este pueblo puede encontrar en un mapa. Pero Reva no pensó eso con esas palabras. Reva pensó: ya no hay."*

La autocorrección es buena, pero el ensayo previo es contraproducente porque el lector ya leyó la tesis y "ya no hay" suena a remate de chiste. **Recomendación:** suprimir todo el inciso largo. Dejar: *"...la naturalidad de los cinco años, que es la naturaleza de un cuerpo que todavía no sabe que 'ya no hay' es algo que se decide en alguna parte. Reva pensó: ya no hay."*

### Cap 12 — Matt 3 (Opus) ✅
Excelente. Brenn como veterano cínico funciona. "El tercer Rey Demonio en mi vida" es la mejor línea del libro hasta ese punto. No tocar.

### Cap 13 — Lena 2 (Opus) 🟡
Excelente. Único cambio: "Armstrong" (D1) y un detalle: *"Las matemáticas no tienen lealtad. Yo tampoco."* es buena, dejarla. Pero el cierre con "manos pequeñas" repite estructura del cap 5. Considera si quieres mantener ese eco (yo lo mantendría — es bonito).

### Cap 14 — Dacius 3 (Opus) ✅
Excelente. La pregunta sobre la cosecha en cena. No tocar.

### Cap 15 — Matt 4 (Opus) ✅
Pieza maestra del Acto I. La confrontación Reva-Verik. Matt como "consecuencia". No tocar.

---

### 🚩 Frontera Opus → Gemini

### Cap 16 — Zahira 2 (Gemini) ✅ con matices
Bien adaptado. La lectura de arena con la grieta en el centro (Veth) es potente. Detalles de prosa que mejorar (físico vs explicativo) pero sustancialmente bien. **Nivel de intervención: bajo**.

Notas concretas:
- Línea: *"Las lecturas de arena en Duren Sakh no eran profecías. No eran visiones de dioses benévolos ni trucos de feria. Eran sismografía."* → es bueno, pero el "sismografía" es metáfora muy moderna en boca del narrador. ¿Cambiar a una imagen del propio mundo? P.ej. *"Eran como el oído pegado a la piedra antes del derrumbe."*
- Cierre con "lo microscópico era lo único que se podía salvar" → tesis del narrador. La voz Opus tendería a cortar la tesis y dejar la imagen.

### Cap 17 — Maren (Gemini) ✅ con matices
Muy buena prosa. Maren como mente fría que ya tiene el bote salvavidas. Conexiones con cap 13 (los 300.000 águilas) y cap 14 (la pregunta del emperador) impecables. **Nivel de intervención: bajo**.

Notas:
- *"El mapa mentía."* — apertura excelente.
- *"Maren, que no era tonta pero tampoco era valiente, ya tenía el billete del bote."* — cierre con etiqueta moral del narrador. La voz Opus dejaría la imagen del derrame de licor y se callaría. **Cortar la última línea** y dejar: *"Se sirvió otra copa. Le tembló la mano. Derramó un poco sobre la madera del escritorio, donde la mancha se expandió lentamente, oscureciendo la veta del roble."*

### Cap 18 — Matt 5 (Gemini) ✅ con matices
La escena del pan a Mira es excelente. Conexión perfecta con cap 23.

Notas:
- *"El miedo se había ido a algún sitio durante la noche, como los soldados que no volvían de patrulla. Simplemente ya no estaba."* — bonita.
- *"No era una revolución. No era nada."* — voz justa.
- Cierre: *"Se parecía, si tenía que ponerle nombre, a estar despierto."* — funciona. Lo mantengo.
- **Plantear D2 (cicatriz)**: si elegimos D2-A, este capítulo es buen sitio para reforzar la descripción física de Matt cuando entra en la casa de Mira.

### Cap 19 — Elara 2 (Gemini) 🟡
Sustancialmente bien (la revelación del Duque de Valdren quemando sus propias tierras es el mejor pivote político del libro). Pero:

- Encabezado: `Ducado de Armstrong` → D1.
- *"Eirenholm iba a empezar a empujar."* — cierre con consigna política casi de eslogan. Voz Gemini característica. La voz Opus terminaría con un gesto físico (ej. Elara enciende otra vela y la deja en la ventana).
- *"un gigante asustado comete errores"* — análisis político del narrador en lugar de la sensación.

### Cap 20 — Dacius 4 (Gemini) 🟡🟡
Estructura perfecta (la carta + la pregunta a Thorne). Pero la **prosa tiene drift Gemini visible**:

- Apertura ensayística: *"El silencio en el Palacio Imperial tenía un peso específico..."* — la voz Opus de Dacius (caps 2/8/14) entraba por una imagen concreta (la copa, el cuaderno, las carpetas). Esta entra por una tesis. Reescribir el primer párrafo entrando por la cama (Dacius sentado en el borde, no duerme).
- D5: *"...la misma vitalidad pura que seguramente sintió su abuelo antes de ordenar una carga de caballería."* — heroificación, cortar.
- *"Escribir era un acto de creación de realidad. En Ornast, si no estaba escrito y sellado, no existía."* — ensayo. La voz Opus mostraría la acción y dejaría al lector deducir.
- *"el más fino combustible para la rebelión interna"* y similares → enfáticos.
- La frase final, con Dacius esperando a que Thorne le rinda cuentas, es muy buena. Mantener.

**Nivel de intervención: alto.** Reescritura de párrafos clave.

### Cap 21 — Rurik (Gemini) ✅
Nuevo personaje, voz militar áspera. Funciona bien. Conexión con Drago resuelta (Drago al este de Duren Sakh, abandonando la frontera sur por la "amenaza" del Rey Demonio — consistente con cap 17 donde Maren dice que Drago "está perdido en el desierto jugando a ser un dios").

Notas:
- *"El honor no se bebe, Vane."* — línea Brenniana, excelente.
- *"Aquí vinimos a morir, pero no por ellos."* — cierre épico justo. Mantener.
- **Pequeño problema de canon:** Rurik no aparece en `Personajes/personajes_por_crear.md` (revisar). Habría que crearle ficha.

### Cap 22 — Los Niños (Gemini) 🔴🔴
Ver D4. Necesita reescritura sustancial de la voz manteniendo las cuatro escenas (Tilo / Elia / Jarek / Anillo Exterior).

### Cap 23 — Aldous 2 (Gemini) ✅ con matices
Excelente arquitectura: Reva trae pan robado → conductor trae carta del emperador → Aldous empieza a registrar. Cierre del arco del Acto II.

Notas:
- D2 (cicatriz) afecta este capítulo.
- *"El centro, la cúspide y los bordes estaban tomando decisiones en la oscuridad, cada uno por su cuenta, movidos por el peso de la estructura que los aplastaba. No era una conspiración. Era algo peor: era la misma conclusión alcanzada por separado..."* — esto es brillante temáticamente pero **es narrador-glosa explícita**. La voz Opus la cortaría y dejaría que el lector haga la inferencia desde las imágenes (Aldous mirando el sello del Águila + Matt + la carta). **Recomendación:** suprimir el párrafo y dejar el siguiente ("Aldous tomó su pluma...").
- Cierre *"Era munición."* — muy bueno. Mantener.

---

## 3. Hallazgos transversales

### 3.1 Voz Gemini vs voz Opus — patrones identificables

Cuando el cap es de Gemini, suelen aparecer:

1. **Apertura ensayística** en lugar de imagen (caps 20, 22).
2. **Aforismos del narrador** sobre los personajes (cap 22: "ha llegado a una conclusión teológica perfecta").
3. **Etiquetas morales** del narrador sobre las acciones (cap 17: "no era tonta pero tampoco era valiente"; cap 19: "un gigante asustado comete errores").
4. **Cierres con consigna** en lugar de gesto físico (cap 19: "Eirenholm iba a empezar a empujar"; cap 22: "Todo va a arder").
5. **Metáforas modernas/abstractas** (cap 16: "sismografía"; cap 20: "creación de realidad").

Patrón Opus:
- Entra por **imagen concreta** (calcetín, copa, gallo).
- Narrador **describe, no juzga**.
- Cierres con **gesto físico o frase del personaje** (Matt acariciando al perro, Reva contando águilas, Dacius soñando mal).
- Metáforas **anclajdas al mundo del POV** (montaña, mina, arroyo, telar, arena, libro de cuentas).

### 3.2 Motivos y leitmotivs (lo que SÍ está cuajando) ✅

- **Botas mojadas**: Matt → Soren (cap 2) → Dacius entiende (cap 8). Soporte sólido.
- **Manos**: Matt (callos de mina), Reva (rojas de tierra), Lena ("piensa en las manos" cap 5 y cap 13), Zahira (sueltan arena), Aldous (las que ponen pan en la mesa), Rurik (la sangrada en cap 21 sobre el lino blanco). **Sistema completo y coherente**.
- **El gallo rojo de Reva** → Enn → la "vecina que tuvo que venderlo" en el informe de Aldous: el hilo invisible más bello del libro.
- **El verso fundacional**: aparece en cap 4 (tejedora lo canta), cap 4 (chamán lo escucha desde el desierto). Necesita aparición clave en Acto III (¿en el cap 22, sustituyendo la voz ensayística por niños tarareándolo?).
- **Contar / no contar**: Matt cuenta días, Reva cuenta águilas, Lena cuenta meses, Aldous cuenta muertos, el anciano del cap 4 cuenta todo. Brenn dejó de contar. Voss masticación = 16. Sistema sutil.

### 3.3 Setups planted, payoff por confirmar

| Setup (cap) | Pago previsto |
|-------------|---------------|
| Madre de Soren en cocinas (cap 14) | escena de Dacius bajando a las cocinas (Acto III) |
| Idris, mago de Duren Sakh "en un edificio sin ventanas en Ornast" (cap 7) | aparición / liberación (Acto III) |
| Kethara fabricando armas en negro (caps 5, 13) | identificación del comprador (¿Maren? ¿Drago? ¿Valdren?) |
| Maren-Valdren contacto (cap 17) | confluencia política |
| Declan a Solmara (cap 13/17) | revelación de contrabando organizado |
| Rurik se rinde a los del desierto (cap 21) | ejército renegado / conexión con Zahira |
| Bandera blanca con sangre de Rurik | símbolo que viajará |
| Carta de Dacius a Aldous (cap 20/23) | red de información paralela al Consejo |

### 3.4 Personajes mencionados pero no entrados en escena

- **Casimir** (`mapa_relaciones.md`): "Casimir ↔ Armstrong: usa a los que dice proteger". Aún no aparece en manuscrito. ¿Es para más adelante?
- **General Kast**: nombrado por Maves (cap 5) y por Maren ("el ministerio de Comercio"). No tiene escena propia.
- **General Drago**: la silla vacía en cap 2, mencionado por Zahira (cap 7), por Maren (cap 17), por Rurik (cap 21). Nunca en escena. ¿Intencional? (Si lo es, está funcionando: como el Rey Demonio, su ausencia lo agranda).

---

## 4. Plan de edición propuesto

Lo dividiré en **5 olas**, ordenadas de menos invasivas a más invasivas. Cada ola corresponde a un commit limpio en git.

### Ola 1 — Canon (decisiones D1/D2)
- Find/replace Armstring↔Armstrong en todo el repo según D1.
- Plantar cicatriz de Matt en cap 1 (y reforzar en cap 18) según D2.
- Renombrar Aldric Varkhen → Halric Varkhen (cap 9) para evitar colisión con Voss.
- Actualizar `Personajes/matt.md` con cicatriz; crear ficha para `rurik.md`.
- Decidir estructura de Actos (D3) y aplicar marcadores correctos.

### Ola 2 — Cirugía menor en caps Opus (1-15)
- Cortar metaficción cap 6 (la línea del "lector").
- Suavizar el inciso largo del cap 11.
- Línea de transición en cap 7 sobre catalejo/padre (para cuadrar cap 16).

### Ola 3 — Alineación de voz Gemini→Opus en caps 16-21, 23
- Cap 16: cambiar "sismografía"; eliminar tesis del cierre.
- Cap 17: cortar última línea moralizante; dejar imagen del derrame.
- Cap 19: cambiar cierre por gesto físico (Elara y la vela); suavizar "gigante asustado".
- Cap 20: reescribir apertura (entrar por la cama, no por tesis); cortar D5 (carga de caballería); suavizar ensayismo medio. **Trabajo más intenso de esta ola.**
- Cap 23: cortar el párrafo de glosa narratorial.

### Ola 4 — Cap 22 (reescritura coral)
Mantener las 4 escenas (Tilo, Elia, Jarek, Anillo Exterior). Reescribir:
- Cortar la apertura ensayística; entrar directo por Tilo.
- Cortar aforismos narratoriales en cada bloque.
- Cierres por gesto físico, no por consigna ("todo va a arder" → algo más callado y por tanto más temible).
- Aparición discreta del verso fundacional (un niño susurrándolo).

### Ola 5 — Actualizaciones de canon y fichas
- Actualizar `masterguide_cuatro_reinos.md` y `atlas.md` con el nombre canónico decidido.
- `personajes_por_crear.md`: marcar entradas existentes (Rurik, Verik, Brin, Tarsus, Noor, Maves, Declan, Halric).
- `mapa_relaciones.md`: añadir Rurik ↔ los del desierto.
- Anotar en `notas_de_proceso.md` los resultados del pase editorial.

---

## 5. Lo que NO voy a tocar

- La estructura argumental: arcos, conexiones, decisiones de los personajes. Todo eso está bien armado.
- La voz de los caps Opus (1-15) más allá de los retoques quirúrgicos arriba.
- Los hallazgos brillantes: la red gallo→Enn→Aldous, las botas mojadas, las manos, el verso viajando.
- Las decisiones temáticas: Rey Demonio off-screen, magia que no salva, Dacius que no se vuelve héroe, etc.

---

---

## 6. Estado del pase editorial

**Decisiones tomadas** (autor dio luz verde el 2026-05-16):
- D1: **Armstrong** (canónico). Find/replace masivo aplicado.
- D2: **A** (cicatriz plantada en cap 1).
- D3: **C** (Acto I = 1-9 / Acto II = 10-21 / Acto III = 22 en adelante).
- D4: cap 22 reescrito alineado al cap 4.
- D5: frase del abuelo cortada.

**Olas ejecutadas:**
- ✅ Ola 1 — Canon (Armstring→Armstrong, cicatriz Matt, Halric Varkhen, marcadores de Acto, fichas).
- ✅ Ola 2 — Cirugía menor en caps Opus (caps 6, 7, 11).
- ✅ Ola 3 — Alineación Gemini→Opus (caps 16, 17, 19, 20, 23).
- ✅ Ola 4 — Reescritura cap 22.
- ✅ Ola 5 — Ficha de Rurik creada. Notas de proceso actualizadas.

**Pendiente menor** (para sprint posterior):
- `Personajes/personajes_por_crear.md` — marcar entradas creadas, añadir nuevos.
- `Esquema/capitulos_detallados.md` — extender con caps 16-23.
- `Personajes/mapa_relaciones.md` — añadir Rurik ↔ los del desierto.
- Resincronizar `masterguide_cuatro_reinos.docx` desde el `.md` (export).

*Pase editorial concluido. Documento queda como registro.*
