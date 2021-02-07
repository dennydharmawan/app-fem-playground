import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// https://material-ui.com/customization/palette/
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    spaceCadet: React.CSSProperties['color'];
    purpleNavy: React.CSSProperties['color'];
    cornflowerBlue: React.CSSProperties['color'];
    softWhite: React.CSSProperties['color'];
  }
  interface PaletteOptions {
    spaceCadet: React.CSSProperties['color'];
    purpleNavy: React.CSSProperties['color'];
    cornflowerBlue: React.CSSProperties['color'];
    softWhite: React.CSSProperties['color'];
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary'];
  }
}

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    dark: true;
    grey: true;
    lightGrey: true;
  }
}

declare module '@material-ui/core/Button/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
    grey: true;
    light: true;
  }
}

declare module '@material-ui/core/styles' {
  interface Theme {
    grid: {
      gridGap: string;
      minColumnWidth: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    grid: {
      gridGap: string;
      minColumnWidth: string;
    };
  }
}

let theme = createMuiTheme({
  grid: {
    gridGap: '2rem',
    minColumnWidth: '18rem',
  },
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#5850EC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#10163a',
      contrastText: '#fff',
    },
    accent: {
      main: '#00d4ff',
      contrastText: '#0a2540',
    },
    spaceCadet: '#31395E',
    purpleNavy: '#54548C',
    cornflowerBlue: '#7899D4',
    softWhite: '#E5EBF1',
    mode: 'light',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'accent' },
          style: {
            backgroundColor: '#00d4ff',
            color: '#0a2540',
          },
        },
        {
          props: { color: 'light' },
          style: {
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.87)',
          },
        },
        {
          props: { color: 'grey' },
          style: {
            backgroundColor: '#5e5d6b',
            color: '#fff',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'dark' },
          style: {
            color: 'hsl(0, 0%, 13%)',
            fontWeight: 700,
            fontSize: '1.25rem',
          },
        },
        {
          props: { variant: 'grey' },
          style: {
            color: 'hsl(0, 0%, 29%)',
            fontWeight: 400,
            fontSize: '1rem',
          },
        },
        {
          props: { variant: 'lightGrey' },
          style: {
            color: 'hsl(0, 0%, 54%)',
            fontWeight: 400,
            fontSize: '0.875rem',
          },
        },
      ],
    },
  },
});

// theme.shadows[1] =
//   '0 1px 3px hsla(0, 0%, 0.0000%, .12), 0 1px 2px hsla(0, 0%, 0.0000%, .24);';
// theme.shadows[2] =
//   '0 3px 6px hsla(0, 0%, 0.0000%, .15), 0 2px 4px hsla(0, 0%, 0.0000%, .12);';
// theme.shadows[3] =
//   '0 10px 20px hsla(0, 0%, 0.0000%, .15), 0 3px 6px hsla(0, 0%, 0.0000%, .10);';
// theme.shadows[4] =
//   '0 15px 25px hsla(0, 0%, 0.0000%, .15), 0 5px 10px hsla(0, 0%, 0.0000%, .5);';
// theme.shadows[5] = '0 20px 40px hsla(0, 0%, 0.0000%, .2)';

theme = responsiveFontSizes(theme);

export default theme;
