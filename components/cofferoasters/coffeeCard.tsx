import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    backgroundColor: 'transparent',

    [`@media (max-width: 750px)`]: {
      maxWidth: '100%',
      display: 'flex',
    },
    [`@media (max-width: 600px)`]: {
      maxWidth: '100%',
      display: 'block',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    flex: '0 1 100%',
  },
});

type Props = {
  title: string;
  description: string;
};

export default function CoffeeCard({ title, description }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box
        sx={{
          width: '100%',
          padding: 0,
          [`@media (max-width: 600px)`]: {
            padding: '0 6em',
          },
        }}
      >
        <CardMedia
          className={classes.media}
          image="/static/coffee.png"
          title="coffe"
        />
      </Box>

      <CardContent
        sx={{
          textAlign: 'center',
          [`@media (max-width: 750px)`]: {
            flex: '0 1 100%',
            alignSelf: 'center',
            textAlign: 'left',
          },
          [`@media (max-width: 600px)`]: {
            textAlign: 'center',
          },
        }}
      >
        <Typography
          gutterBottom
          variant="dark"
          component="div"
          sx={{
            textAlign: 'inherit',
            [`@media (max-width: 600px)`]: {
              paddingTop: '2em',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="grey"
          component="p"
          sx={{
            fontSize: '1rem',
            textAlign: 'inherit',
            [`@media (max-width: 750px)`]: {
              marginTop: '1em',
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
