// ============================================================
// Plugin Remark — limpia los .md de capítulos antes del render
//
// Quita:
// - Todos los h1 (los manejamos como chapter-head desde el componente)
// - El primer `---` después del h1
// - Cualquier `*FIN DEL ACTO X*` que aparezca al final
// ============================================================

export function remarkChapterCleanup() {
  return (tree) => {
    if (!tree.children || tree.children.length === 0) return;

    const children = tree.children;
    let firstH1Idx = -1;

    // Encontrar el primer h1 (puede ser ACTO o el título)
    for (let i = 0; i < children.length; i++) {
      const n = children[i];
      if (n.type === 'heading' && n.depth === 1) {
        firstH1Idx = i;
        break;
      }
    }

    // Detectar si hay DOS h1 seguidos (marcador de ACTO + título del capítulo)
    let secondH1Idx = -1;
    if (firstH1Idx >= 0) {
      for (let i = firstH1Idx + 1; i < children.length; i++) {
        const n = children[i];
        // Si encontramos otro h1 cerca, sin contenido sustancial en medio
        if (n.type === 'heading' && n.depth === 1) {
          // Permitimos thematic breaks entre los dos h1
          secondH1Idx = i;
          break;
        }
        // Si encontramos contenido real, paramos
        if (n.type === 'paragraph' || n.type === 'list' || n.type === 'blockquote') {
          break;
        }
      }
    }

    const toRemove = new Set();
    if (firstH1Idx >= 0) toRemove.add(firstH1Idx);
    if (secondH1Idx >= 0) toRemove.add(secondH1Idx);

    // Quitar separadores `---` inmediatamente después de los h1
    const lastH1 = secondH1Idx >= 0 ? secondH1Idx : firstH1Idx;
    if (lastH1 >= 0) {
      let j = lastH1 + 1;
      while (j < children.length && children[j].type === 'thematicBreak') {
        toRemove.add(j);
        j++;
      }
    }

    // Detectar bloque final "*FIN DEL ACTO X*" — patrón:
    //   thematicBreak
    //   paragraph con un solo emphasis "FIN DEL ACTO ..."
    for (let i = children.length - 1; i >= Math.max(0, children.length - 5); i--) {
      const n = children[i];
      if (n.type === 'paragraph' && n.children?.length === 1) {
        const inner = n.children[0];
        if (
          inner?.type === 'emphasis' &&
          inner.children?.length === 1 &&
          inner.children[0]?.type === 'text' &&
          /^FIN DEL ACTO\s+/i.test(inner.children[0].value ?? '')
        ) {
          toRemove.add(i);
          // y el thematicBreak inmediatamente anterior
          if (i > 0 && children[i - 1].type === 'thematicBreak') {
            toRemove.add(i - 1);
          }
          break;
        }
      }
    }

    tree.children = children.filter((_, idx) => !toRemove.has(idx));
  };
}
