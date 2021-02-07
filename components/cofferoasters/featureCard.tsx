import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    backgroundColor: '#0E8684',
    color: '#fff',
    padding: '0 2em',
    paddingTop: '2em',

    [`@media (max-width: 850px)`]: {
      maxWidth: '90%',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent
        sx={{
          textAlign: 'center',
          [`@media (max-width: 850px)`]: {
            display: 'flex',
            textAlign: 'left',
          },
          [`@media (max-width: 600px)`]: {
            display: 'block',
            textAlign: 'center',
          },
        }}
      >
        <Box
          sx={{
            textAlign: 'inherit',
            [`@media (max-width: 850px)`]: {
              flex: '0 1 30%',
            },
          }}
        >
          <AcUnitIcon sx={{ fontSize: '6rem' }} />
        </Box>
        <Box
          sx={{
            textAlign: 'inherit',
            [`@media (max-width: 850px)`]: {
              flex: '0 1 70%',
            },
          }}
        >
          <Typography
            gutterBottom
            variant="dark"
            component="div"
            sx={{
              textAlign: 'inherit',
              color: 'inherit',
              [`@media (max-width: 600px)`]: {
                marginBlock: '2em',
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="grey"
            component="p"
            sx={{
              fontSize: '0.875rem',
              textAlign: 'inherit',
              color: 'hsla(0, 0%, 100%, 0.86)',
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
