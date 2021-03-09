// https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6

import { useEffect, useRef, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Container,
  darken,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { experimentalStyled, makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import TwitterIcon from "@material-ui/icons/Twitter";

import CoffeeCard from "../../components/cofferoasters/coffeeCard";
import FeatureCard from "../../components/cofferoasters/featureCard";
import { BoxGrid, FlexGrid, GridWrapper } from "../../components/CustomGrid";
import {
  PopperMenu,
  PopperMenuButton,
  PopperMenuContent,
  usePopperMenu
} from "../../components/PopperMenu";
import theme from "../../constants/theme";

const NavigationMenu = experimentalStyled(Button)(() => ({
  color: 'hsl(0, 0%, 29%)',
}));

const subscription = () => {
  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ paddingInline: theme?.grid?.gridGap }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Typography variant="dark">Coffeeroasters</Typography>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: '1rem',
                  flexWrap: 'wrap',
                  marginLeft: 'auto',
                }}
              >
                <Hidden only={['xs']}>
                  <NavigationMenu variant="text">Home</NavigationMenu>
                  <NavigationMenu variant="text">About Us</NavigationMenu>
                  <NavigationMenu variant="text">
                    Create Your Plan
                  </NavigationMenu>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <PopperMenu>
                    <PopperMenuButton>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-haspopup="true"
                        aria-label="menu"
                      >
                        <MenuIcon />
                      </IconButton>
                    </PopperMenuButton>
                    <PopperMenuContent>
                      <MenuList id="menu-list-grow">
                        <MenuItem
                          onClick={() => {
                            alert('how to close this compound component?');
                            //TODO: we need to use control props pattern
                          }}
                        >
                          Home
                        </MenuItem>
                        <MenuItem>About US</MenuItem>
                        <MenuItem>Create Your Plan</MenuItem>
                      </MenuList>
                    </PopperMenuContent>
                  </PopperMenu>
                </Hidden>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <GridWrapper
        component="main"
        sx={{ backgroundColor: '#FDFCF7', paddingTop: 0, paddingBottom: 0 }}
      >
        <FlexGrid>
          <Container maxWidth="lg" disableGutters>
            <Box
              id="hero"
              sx={{
                width: 'auto',
                background: `url(
                  'https://source.unsplash.com/1600x900/?coffee'
                ) rgba(0, 0, 0, 0.8)`,
                backgroundBlendMode: 'multiply',
                objectFit: 'cover',
                objectPosition: 'center',
                padding: '5em 4em',
                color: 'white',
                borderRadius: '12px',
              }}
            >
              <Box
                sx={{
                  width: '60%',
                  [`@media (max-width: 1125px)`]: {
                    width: '80%',
                  },
                  [`@media (max-width: 750px)`]: {
                    width: '100%',
                  },
                  [`@media (max-width: 600px)`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  },
                }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize:
                      'clamp(1.5rem, 0.7174rem + 3.4783vw, 3.5rem) !important',
                  }}
                >
                  Great coffee made simple.
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    color: 'hsla(0, 0%, 100%, 0.86)',
                    fontSize: 'clamp(1rem, 0.8043rem + 0.8696vw, 1.5rem)',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta et illo ullam labore eius! Adipisci itaque iste nostrum
                  odio ipsum ipsam quia, placeat velit! Porro, quam? Atque error
                  facere illo.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '2em',
                    backgroundColor: '#0E8684',
                    fontSize: 'clamp(1rem, 0.8043rem + 0.8696vw, 1.5rem)',
                    textTransform: 'none',
                    padding: '1em 2em',
                    borderRadius: '12px',
                    fontWeight: 700,
                    ':hover': {
                      backgroundColor: darken('#0E8684', 0.2),
                    },
                  }}
                >
                  Create your plan
                </Button>
              </Box>
            </Box>
          </Container>
        </FlexGrid>

        <Container maxWidth="lg" disableGutters>
          <FlexGrid component="section" sx={{ padding: '6em 0' }}>
            <CoffeeCard
              title="Gran Espresso"
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta et illo ullam labore eius! Adipisci itaque iste nostrum
                "
            />
            <CoffeeCard
              title="Planalto"
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta et illo ullam labore eius! Adipisci itaque iste nostrum"
            />
            <CoffeeCard
              title="Picollo"
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta et illo ullam labore eius! Adipisci itaque iste nostrum
                  odio ipsum ipsam quia, placeat"
            />
            <CoffeeCard
              title="Danche"
              description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          </FlexGrid>
        </Container>

        <FlexGrid component="section">
          <Container maxWidth="lg" disableGutters>
            <Box
              sx={{
                width: 'auto',
                backgroundColor: '#2B323A',
                padding: '5em 4em',
                paddingBottom: '15em',
                color: 'white',
                borderRadius: '12px',

                [`@media (max-width: 850px)`]: {
                  paddingBottom: '24em',
                },
                [`@media (max-width: 600px)`]: {
                  padding: 0,

                  ':after': {
                    content: '""',
                    display: 'block',
                    width: 'auto',
                    backgroundColor: 'gray',
                    height: '700px',
                    borderRadius: '0 0 12px 12px',
                    marginTop: '4em',
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  margin: 'auto',
                  [`@media (max-width: 850px)`]: {
                    width: '100%',
                  },
                  [`@media (max-width: 600px)`]: {
                    width: '90%',
                    paddingTop: '4em',
                  },
                }}
              >
                <Typography
                  variant="dark"
                  sx={{
                    color: 'inherit',
                    width: 'auto',
                    textAlign: 'center',
                    marginBottom: '2em',
                  }}
                  component="div"
                >
                  Why choose Us?
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  sx={{ textAlign: 'center', color: 'hsla(0, 0%, 100%, 0.86)' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta et illo ullam labore eius! Adipisci itaque iste nostrum
                  odio ipsum ipsam quia, placeat velit! Porro, quam? Atque error
                  facere illo.
                </Typography>
              </Box>
            </Box>
            <FlexGrid
              component="section"
              sx={{
                width: '90%',
                marginInline: 'auto',
                marginTop: '-12em !important',
                [`@media (max-width: 850px)`]: {
                  width: '100%',
                  marginTop: '-21em !important',
                },
                [`@media (max-width: 600px)`]: {
                  marginTop: '-42em !important',
                },
              }}
            >
              <FeatureCard
                title="Best Quality"
                description="Discover an endless variety of the world's best artisan coffee from each of our roaster."
              />
              <FeatureCard
                title="Exclusive Benefits"
                description="Special offer sand swag when you subscribe, including 30% off your first shipment."
              />
              <FeatureCard
                title="Free Shipping"
                description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
              />
            </FlexGrid>
          </Container>
        </FlexGrid>

        <Box component="section" sx={{ padding: '6em 0' }}>
          <Container maxWidth="lg" disableGutters>
            <Typography
              variant="grey"
              component="div"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '4em',
                [`@media (max-width: 800px)`]: {
                  textAlign: 'center',
                },
              }}
            >
              How it works
            </Typography>

            <BoxGrid
              numberOfColumns="3"
              minColumnWidth="14rem"
              gridGap="0"
              sx={{
                rowGap: '2rem',

                [`@media (max-width: 800px)`]: {
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  textAlign: 'center',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: '#fff',
                  ':before': {
                    content: '""',
                    backgroundColor: 'orange',
                    height: '2px',
                    width: '100%',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                    position: 'absolute',
                  },
                  ':after': {
                    content: '""',
                    backgroundColor: 'inherit',
                    border: '2px solid red',
                    borderRadius: '50%',
                    height: '24px',
                    width: '24px',
                    position: 'absolute',
                  },

                  [`@media (max-width: 800px)`]: {
                    display: 'none',
                  },
                }}
              ></Box>
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: '#fff',
                  ':before': {
                    content: '""',
                    backgroundColor: 'inherit',
                    border: '2px solid red',
                    borderRadius: '50%',
                    height: '24px',
                    width: '24px',
                    position: 'absolute',
                    zIndex: '2',
                  },
                  ':after': {
                    content: '""',
                    backgroundColor: 'orange',
                    height: '2px',
                    width: '100%',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                    position: 'absolute',
                    zIndex: '1',
                  },

                  [`@media (max-width: 800px)`]: {
                    display: 'none',
                  },
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  border: '2px solid red',
                  borderRadius: '50%',
                  height: '24px',
                  width: '24px',

                  [`@media (max-width: 800px)`]: {
                    display: 'none',
                  },
                }}
              ></Box>

              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '3rem',
                  color: 'orange',
                  [`@media (max-width: 800px)`]: {
                    order: 1,
                  },
                }}
              >
                01
              </Typography>
              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '3rem',
                  color: 'orange',
                  [`@media (max-width: 800px)`]: {
                    order: 4,
                  },
                }}
              >
                02
              </Typography>
              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '3rem',
                  color: 'orange',
                  [`@media (max-width: 800px)`]: {
                    order: 7,
                  },
                }}
              >
                03
              </Typography>

              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '2rem',
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 2,
                  },
                }}
              >
                Pick your Coffee
              </Typography>
              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '2rem',
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 5,
                  },
                }}
              >
                Choose the frequency
              </Typography>
              <Typography
                variant="dark"
                color="initial"
                sx={{
                  fontSize: '2rem',
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 8,
                  },
                }}
              >
                Receive and enjoy!
              </Typography>

              <Typography
                variant="grey"
                color="initial"
                component="div"
                sx={{
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 3,
                  },
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                pariatur, ex nobis quia sapiente molestias nostrum fuga.
                Molestias veritatis inventore sint sequi adipisci vel facere,
                asperiores illo architecto, dicta aliquam.
              </Typography>
              <Typography
                variant="grey"
                color="initial"
                component="div"
                sx={{
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 6,
                  },
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nulla aliquam necessitatibus non tempora perferendis cumque aut
                cupiditate veritatis numquam.
              </Typography>
              <Typography
                variant="grey"
                color="initial"
                component="div"
                sx={{
                  paddingRight: '2em',
                  [`@media (max-width: 800px)`]: {
                    paddingRight: 0,
                    order: 9,
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita distinctio, placeat mollitia eum aspernatur beatae
                tempore eos, laudantium tenetur neque, quia in provident dolor
                nulla minima. Nam accusamus fugiat quaerat similique eum
                officiis qui?
              </Typography>

              <Button
                variant="contained"
                sx={{
                  alignSelf: 'start',
                  justifySelf: 'start',
                  backgroundColor: '#0E8684',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  ':hover': {
                    backgroundColor: darken('#0E8684', 0.4),
                  },
                  [`@media (max-width: 800px)`]: {
                    order: 10,
                    justifySelf: 'center',
                    fontSize: '1.5rem',
                    padding: '0.8em 1.5em',
                  },
                }}
              >
                Create your plan
              </Button>
            </BoxGrid>
          </Container>
        </Box>
      </GridWrapper>
      <Box component="footer">
        <Box
          sx={{
            backgroundColor: '#2B323A',
            color: 'white',
            padding: '1em 4em',
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <Box
              sx={{
                display: 'flex',
                width: 'auto',
                color: '#fff',
                alignItems: 'center',

                [`@media (max-width: 800px)`]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: '1em',
                  paddingBlock: '2em',
                },
              }}
            >
              <Typography variant="dark" sx={{ color: 'inherit' }}>
                Coffeeroasters
              </Typography>
              <Box
                sx={{
                  marginLeft: '4em',
                  color: 'hsla(0, 0%, 100%, 0.86)',
                  [`@media (max-width: 800px)`]: {
                    marginLeft: '0',
                  },
                }}
              >
                <Button variant="text" color="inherit">
                  Home
                </Button>
                <Button variant="text" color="inherit">
                  About Us
                </Button>
                <Button variant="text" color="inherit">
                  Create Your Plan
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  marginLeft: 'auto',
                  [`@media (max-width: 800px)`]: {
                    marginLeft: '0',
                  },
                }}
              >
                <IconButton color="inherit" edge="end">
                  <FacebookIcon />
                </IconButton>

                <IconButton color="inherit" edge="end">
                  <TwitterIcon />
                </IconButton>

                <IconButton color="inherit" edge="end">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default subscription;
