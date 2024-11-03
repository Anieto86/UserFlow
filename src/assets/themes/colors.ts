import { alpha } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface PaletteColor {
    medium?: string;
    lightest?: string;
  }

  interface SimplePaletteColorOptions {
    medium?: string;
    lightest?: string;
  }
}

const withAlphas = (color: any) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const green = {
  50: "#E7FCEB",
  100: "#DEF3E2",
  200: "#BDE6C5",
  300: "#9BDAA9",
  400: "#7ACD8C",
  500: "#59C16F",
  600: "#3DA453",
  700: "#2E7B3E",
  800: "#1F522A",
  900: "#OF2915",
};

export const purple = {
  50: "#EEECFF",
  100: "#E6E4F6",
  200: "#CDC9ED",
  300: "#B5ADE3",
  400: "#9C92DA",
  500: "#8377D1",
  600: "#5646C0",
  700: "#3F3293",
  800: "#2A2162",
  900: "#151131",
};

export const blue = {
  50: "#EAF2FC",
  100: "#B3D3FA",
  200: "#8DBCF7",
  300: "#66A6F4",
  400: "#2D85F0",
  500: "#0E5FC2",
  600: "#0C56B0",
  700: "#094186",
  800: "#072F5F",
  900: "#041C39",
};

export const orange = {
  50: "#FFF9E0",
  100: "#FEF3C7",
  200: "#FDE68A",
  300: "#FCD34D",
  400: "#FBBF24",
  500: "#F59E0B",
  600: "#D97706",
  700: "#B45309",
  800: "#5E2909",
  900: "#1C0C04",
};

export const red = {
  50: "#F5EBED",
  100: "#E7BCC4",
  200: "#D98D9B",
  300: "#CC5E72",
  400: "#BE2F49",
  500: "#B00020",
  600: "#8D001A",
  700: "#6A0014",
  800: "#47000D",
  900: "#240007",
};

export const neutral = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

export const violet = withAlphas({
  lightest: purple[50],
  light: purple[100],
  medium: purple[600],
  main: purple[900],
  dark: purple[800],
  darkest: purple[900],
});

export const grey = withAlphas({
  light50: neutral[50],
  lightest: neutral[100],
  light: neutral[400],
  main: neutral[500],
  dark: neutral[700],
  darkest: neutral[900],
  contrastText: "#FFFFFF",
});

export const primary = withAlphas({
  lightest: purple[50],
  light: purple[100],
  main: purple[900],
  medium: purple[600],
  dark: purple[800],
  darkest: purple[600],
  contrastText: "#FFFFFF",
});

export const secondary = withAlphas({
  main: "#FFFFFF",
  contrastText: purple[900],
});

export const error = withAlphas({
  lightest: red[50],
  light: red[100],
  main: red[600],
  dark: red[700],
  darkest: red[900],
  contrastText: "#FFFFFF",
});

export const warning = withAlphas({
  lightest: orange[50],
  light: orange[100],
  main: orange[600],
  dark: orange[700],
  darkest: orange[900],
  contrastText: "#FFFFFF",
});

export const info = withAlphas({
  lightest: blue[50],
  light: blue[100],
  main: blue[600],
  dark: blue[700],
  darkest: blue[900],
  contrastText: "#FFFFFF",
});

export const success = withAlphas({
  lightest: green[50],
  light: green[100],
  main: green[600],
  dark: green[700],
  darkest: green[900],
  contrastText: "#FFFFFF",
});
