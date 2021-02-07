import { Container, Typography } from "@material-ui/core";

import { FlexGrid, FlexGridWrap } from "../components/FlexGrid";
import Layout from "../components/Layout";

export default function test() {
  return (
    <FlexGridWrap>
      <FlexGrid>
        <div>One column default</div>
      </FlexGrid>

      <FlexGrid>
        <div>Half column 1</div>
        <div>Half column 2</div>
      </FlexGrid>

      <FlexGrid>
        <div>3-col 1</div>
        <div>3-col 2</div>
        <div>3-col 3</div>
      </FlexGrid>

      <FlexGrid>
        <div>4-col 1</div>
        <div>4-col 2</div>
        <div>4-col 3</div>
        <div>4-col 4</div>
      </FlexGrid>
    </FlexGridWrap>
  );
}
