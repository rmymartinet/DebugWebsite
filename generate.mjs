import { generate } from "critical";
generate({
  // Inline le CSS critique généré dans le document HTML
  inline: true,

  // Le répertoire de base de votre projet
  base: "./assets",

  // // Le code HTML à optimiser (ou vous pouvez spécifier un fichier HTML source avec la propriété 'src')
  // html: "<html>...</html>",

  // Le fichier HTML source (facultatif si vous avez déjà spécifié le code HTML ci-dessus)
  src: "index.html",

  // Vos fichiers CSS (facultatif, si vous n'avez pas besoin de spécifier de CSS)
  css: ["./assets/style.min.css", "./assets/bootstrap/bootstrap.min.css"],

  // Largeur du viewport
  width: 1300,

  // Hauteur du viewport
  height: 900,

  // Les fichiers de sortie pour les résultats
  target: {
    css: "critical.css",
    html: "index-critical.html",
    uncritical: "uncritical.css",
  },

  // Extraire les styles en ligne des feuilles de style référencées
  extract: true,

  // Ignorer certaines règles CSS (facultatif)
  ignore: {
    atrule: ["@font-face"],
    rule: [/some-regexp/],
    decl: (node, value) => /big-image\.png/.test(value),
  },
});
