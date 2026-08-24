/* Template: copy to fonts.local.js and edit.
 *
 *   cp fonts.local.example.js fonts.local.js
 *
 * Souffleur leaves six font roles open, each held by a neutral placeholder
 * name. While a placeholder is unbound, the next family in the stack takes
 * over: a free alternative first, then a system font. This file binds the
 * placeholders to faces installed on this machine.
 *
 * Binding goes through local() with the PostScript name, not the family
 * name. The reason: some families carry many styles under one name and mix
 * roman, small caps and italic. Left to choose, the browser reaches for the
 * wrong cut.
 *
 * On macOS the PostScript name is in Font Book, under Preview then Info, or:
 *   python3 -c "import sys;from fontTools.ttLib import TTFont; \
 *     print(TTFont(sys.argv[1])['name'].getDebugName(6))" YOURFONT.otf
 *
 * This file does not belong in the repository. .gitignore keeps it out, and
 * .githooks/pre-commit flags local() bindings in tracked files.
 */
(() => {
  const css = `
@font-face { font-family: "Souffleur Display"; font-weight: 400;
             src: local("Example-Titling-Regular"); }
@font-face { font-family: "Souffleur Display"; font-weight: 700;
             src: local("Example-Titling-Bold"); }

@font-face { font-family: "Souffleur UI"; font-weight: 400;
             src: local("Example-Sans-Regular"); }
@font-face { font-family: "Souffleur UI"; font-weight: 700;
             src: local("Example-Sans-Bold"); }

/* Where a family name resolves on its own, the variable is enough. */
:root {
  --font-serif:  "Your Reading Serif", Georgia, serif;
  --font-mono:   "Your Monospace", ui-monospace, Menlo, monospace;
  --font-plakat: "Your Condensed", Impact, sans-serif;
  --font-geo:    "Your Grotesque", system-ui, sans-serif;
}
`;
  document.head.insertAdjacentHTML("beforeend",
    '<style id="local-fonts">' + css + '</style>');

  /* Optional: what the footer and the help dialog report as detected. The
     labels appear in the interface, which is German, so they stay German. */
  window.SOUFFLEUR_FONTS = [
    { label: "Schlagzeile",  want: ["Souffleur Display"] },
    { label: "Lesetext",     want: ["Your Reading Serif"] },
    { label: "Auszeichnung", want: ["Souffleur UI"] },
    { label: "Editor",       want: ["Your Monospace"] },
    { label: "Plakat",       want: ["Your Condensed"] },
    { label: "Geometrisch",  want: ["Your Grotesque"] }
  ];
})();
