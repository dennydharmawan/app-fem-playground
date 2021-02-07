import { NextSeo } from "next-seo";

import { Box, Button, Typography } from "@material-ui/core";

import Layout from "../components/Layout";

const about = () => {
  return (
    <>
      <Layout>
        <Typography variant="body1" color="initial">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          distinctio voluptates quidem reprehenderit minima optio veritatis
          praesentium hic, in sit tempore animi vel esse possimus molestiae
          officiis amet dolores quibusdam.
        </Typography>
        <Button variant="text" color="accent">
          Home
        </Button>
        <Typography variant="body2" color="initial">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          distinctio voluptates quidem reprehenderit minima optio veritatis
          praesentium hic, in sit tempore animi vel esse possimus molestiae
          officiis amet dolores quibusdam.
        </Typography>
      </Layout>
    </>
  );
};

export default about;
