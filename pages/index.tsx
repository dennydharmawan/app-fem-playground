import { Container, Typography } from "@material-ui/core";

import { BoxGrid, GridWrapper } from "../components/CustomGrid";
import Layout from "../components/Layout";

export default function index() {
  return (
    <GridWrapper>
      <BoxGrid>
        <div>One column default</div>
      </BoxGrid>

      <BoxGrid>
        <div>Half column 1</div>
        <div>Half column 2</div>
      </BoxGrid>

      <BoxGrid>
        <span>3-col 1</span>
        <span>3-col 2</span>
        <span>3-col 3</span>
      </BoxGrid>

      <BoxGrid>
        <span>4-col 1</span>
        <span>4-col 2</span>
        <span>4-col 3</span>
        <span>4-col 4</span>
      </BoxGrid>
    </GridWrapper>
  );
}
