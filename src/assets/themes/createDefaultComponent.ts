import { useTheme } from "@mui/material/styles";

export const createDefaultComponent = () => {
  const theme = useTheme();
  return {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
         src: local('Inter'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr0YyJzBb-UN1MAH2SdL8.woff2') format('woff2');
        }
        .image-placeholder {
          width: 100%;
          height: auto;
          background-color: #f0f0f0;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnsManagementHeader: {
          backgroundColor: theme.palette.primary.medium,
          color: theme.palette.primary.contrastText,
          borderRadius: "8px",

          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            backgroundColor: theme.palette.grey[100],
          },
          "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },

        columnsManagement: {
          overflow: "hidden",
          borderRadius: "8px",
          "& .MuiTypography-root": { fontSize: "14px", variant: "subtitle1" },
          // "& .MuiFormControlLabel-root": {
          //   "& .MuiCheckbox-root": {
          //     "&.Mui-checked": {
          //       // backgroundColor: "lightblue",
          //       // borderRadius: "4px",
          //       "& ~ .MuiTypography-root": {
          //         // backgroundColor: "lightblue",
          //       },
          //     },
          //   },
          // },
        },
        columnsManagementFooter: {
          "& .MuiTypography-root": { fontSize: "14px", variant: "subtitle1" },
        },
      },
    },
  };
};
