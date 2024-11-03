import { Components, PaletteOptions, Theme, createTheme, Shadows } from "@mui/material";
import { createDefaultTypography } from "./createDefaultTypography";
import { createDefaultPalette } from "./createDefaultPalette";
import { createDefaultComponent } from "./createDefaultComponent";

export const createDefaultTheme = () => {
  const palette = createDefaultPalette();
  const typography = createDefaultTypography();
  const components = createDefaultComponent();

  return createTheme({
    palette: palette as PaletteOptions,
    typography,
    spacing: 4, // ex) theme.spacing(2); = "8px"  theme.spacing(8); = "32px"
    // shape: {
    //   borderRadius: 8, // default border radius
    // },
    shadows: ["none", "0px 2px 12px 0px rgba(0, 0, 0, 0.1)", ...Array(23).fill("none")] as Shadows,
    components: components as Components<Omit<Theme, "components">>,
  });
};
