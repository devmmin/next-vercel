import { mauve } from "@radix-ui/colors";
import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
  ],
  "*": {
    fontFamily: "'Noto Sans KR', sans-serif",
    boxSizing: "border-box",
    color: mauve.mauve12,
  },
  body: {
    margin: 0,
    padding: 0,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

export default globalStyles;
