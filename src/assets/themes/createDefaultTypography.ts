export const createDefaultTypography = () => {
  return {
    fontFamily: "Inter",
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeighMedium: 500, // sx={{ fontWeight: theme.typography.fontWeighMedium }}
    fontWeightBold: 600, // is semibold in our figma
    h1: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.75rem", //28px
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.5rem", //24px
    },
    h3: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.25rem", //20px
    },
    subtitle1: {
      fontSize: "0.875rem", //14px
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.75rem", //12px
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.25rem", //20px
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem", //16px
      fontWeight: 400,
    },
    button: {
      fontSize: "0.75rem", //12px
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem", //12px
      fontWeight: 500,
      lineHeight: 1.66,
    },
  };
};
