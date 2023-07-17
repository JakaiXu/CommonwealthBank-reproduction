import {
  ThemeOptions,
  PaletteOptions,
  PaletteColor,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    // status: {
    //   danger: string;
    // };
    primary:{
      light:string;
      main:string
    }
  }
  interface ThemeOptions {
    // status: {
    //   danger: React.CSSProperties["color"];
    // },
    primary:{
      light:React.CSSProperties["color"];
      main:React.CSSProperties["color"];
    }
  }

  interface Palette {
    neutral?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    darker?:string
  }
  interface PaletteColor {
    darker?: string
  }
}
