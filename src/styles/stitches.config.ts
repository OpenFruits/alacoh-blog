import { createStitches } from "@stitches/react";
import { colors } from "./colors";
import { utils } from "./utils";

export const { styled, css, globalCss, keyframes, getCssText, createTheme, theme } = createStitches({
  utils,
  media: {},
  theme: {
    colors,
  },
});

globalCss({
  "*": { margin: 0, padding: 0 },
  html: {},
  body: {
    color: "$gray12",
    backgroundColor: "$gray2",
  },
  a: { textDecoration: "none", color: "$gray12" },
  li: { listStyle: "none" },
})();
