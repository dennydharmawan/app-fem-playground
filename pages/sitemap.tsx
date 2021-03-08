import globby from "globby";
import { GetServerSideProps, NextPageContext } from "next";

import { Box, Button } from "@material-ui/core";

import { BoxGrid, GridWrapper } from "../components/CustomGrid";
import Link from "../components/Link";

type Props = {
  pageRoutes: string[];
};

function replaceAll(str: string, mapObj: Record<string, string>) {
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()];
  });
}

export default function SiteMap({ pageRoutes }: Props) {
  return (
    <GridWrapper>
      <BoxGrid minColumnWidth="4rem">
        {pageRoutes.map((pageRoute) => (
          <Button
            variant="contained"
            color="primary"
            component={Link as React.ElementType}
            href={pageRoute}
            key={pageRoute}
          >
            {pageRoute}
          </Button>
        ))}
      </BoxGrid>
    </GridWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pages = await globby([
    'pages/*.tsx',
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/index.tsx',
    '!pages/sitemap.tsx',
  ]);

  const pageRoutes = pages.map((page) =>
    replaceAll(page, { ['.tsx']: '', pages: '' })
  );

  return {
    props: {
      pageRoutes,
    },
  };
};
