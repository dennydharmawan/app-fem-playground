import PropTypes from 'prop-types';
import Header from './Header';
import { Grid } from '@material-ui/core';

export default function Layout({ children, pageTitle }) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <header>
          <Header />
        </header>
      </Grid>
      <Grid item xs={12}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
}
