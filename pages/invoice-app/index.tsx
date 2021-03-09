//https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import DarkModeIcon from "@material-ui/icons/Brightness2";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LightModeIcon from "@material-ui/icons/Flare";

import { GridWrapper } from "../../components/CustomGrid";
import {
  PopperMenu,
  PopperMenuButton,
  PopperMenuContent
} from "../../components/PopperMenu";
import theme from "../../constants/theme";

const customTheme = createMuiTheme({
  palette: {
    mode: 'light',
  },
});

const data = [
  {
    id: '#RT3080',
    dueDate: '2021/08/19',
    customerName: 'Jensen Huang',
    price: 1800.9,
    status: 'PAID',
  },
  {
    id: '#RT3081',
    dueDate: '2021/09/21',
    customerName: 'Alex grim',
    price: 558.9,
    status: 'PENDING',
  },
  {
    id: '#RT3082',
    dueDate: '2021/08/19',
    customerName: 'Alyssa Werner',
    price: 14000.33,
    status: 'PAID',
  },
];

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  return (
    // <ThemeProvider theme={customTheme}>
    <>
      <AppBar
        position="fixed"
        sx={{
          padding: 0,
          backgroundColor: '#373B54',

          [`@media (min-width: 1100px)`]: {
            left: '0',
            width: '64px',
            height: '100%',
            borderBottomRightRadius: '0.6rem',
            borderTopRightRadius: '0.6rem',
            backgroundColor: "red'",
          },
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',

              [`@media (min-width: 1100px)`]: {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: '100vh',
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: '#7D5CFA',
                height: '64px',
                width: '64px',
                display: 'grid',
                placeItems: 'center',
                borderTopRightRadius: '0.6rem',
                borderBottomRightRadius: '0.6rem',
              }}
            >
              Inv
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'fff',

                [`@media (min-width: 1100px)`]: {
                  flexDirection: 'column',
                  marginLeft: 0,
                  marginTop: 'auto',
                },
              }}
            >
              <Box
                sx={{
                  paddingInline: '1rem',
                  [`@media (min-width: 1100px)`]: {
                    paddingInline: 0,
                  },
                }}
              >
                <IconButton sx={{ color: '#fff' }}>
                  <LightModeIcon />
                </IconButton>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  backgroundColor: '#fff',
                  [`@media (min-width: 1100px)`]: {
                    // change orientation to horizontal
                    borderRightWidth: 0,
                    borderBottomWidth: 'thin',
                  },
                }}
              />

              <Box
                sx={{
                  paddingInline: '1rem',
                  [`@media (min-width: 1100px)`]: {
                    paddingInline: '0rem',
                  },
                }}
              >
                <IconButton>
                  <Avatar>M</Avatar>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        className={classes.offset}
        sx={{
          [`@media (min-width: 1100px)`]: {
            display: 'none',
          },
        }}
      />
      <Container maxWidth="md" disableGutters>
        <Paper sx={{ width: '100%', minHeight: '100vh' }}>
          <GridWrapper>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant="h3" component="div">
                  Invoices
                </Typography>
                <Typography variant="grey">
                  There are 7 total invoices
                </Typography>
              </Box>

              <Box sx={{ marginLeft: 'auto' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingInline: '1rem',
                  }}
                >
                  <PopperMenu>
                    <PopperMenuButton>
                      <IconButton>
                        <Typography variant="h6">Filter by value</Typography>
                        <ExpandMoreIcon />
                      </IconButton>
                    </PopperMenuButton>
                    <PopperMenuContent>
                      <Box>test</Box>
                    </PopperMenuContent>
                  </PopperMenu>
                </Box>

                <Button variant="contained">New Invoice</Button>
              </Box>
            </Box>
          </GridWrapper>
        </Paper>
      </Container>
    </>
    // </ThemeProvider>
  );
}

export default App;
