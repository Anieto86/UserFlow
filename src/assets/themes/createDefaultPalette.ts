import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { grey, primary, secondary, error, warning, info, success, violet } from "./colors";

declare module "@mui/material/styles" {
  interface TypeBackground {
    gradient: string;
  }

  interface Palette {
    background: TypeBackground;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}

export const createDefaultPalette = () => {
  return {
    action: {
      active: primary.main,
      disabled: alpha(grey.darkest, 0.38),
      disabledBackground: alpha(grey.darkest, 0.12),
      focus: alpha(grey.darkest, 0.16),
      hover: alpha(grey.darkest, 0.04),
      selected: alpha(grey.darkest, 0.12),
    },
    background: {
      default: alpha(common.white, 0.05),
      paper: common.white,
      gradient: "linear-gradient(230.04deg, #3F3293 2.11%, #151131 60.26%)",
    },
    divider: alpha("#000000", 0.12),
    grey,
    violet,
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    text: {
      primary: alpha("#000000", 0.87),
      secondary: alpha("#000000", 0.6),
      disabled: alpha("#000000", 0.38),
    },
  };
};
