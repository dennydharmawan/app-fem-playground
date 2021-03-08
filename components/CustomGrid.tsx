import clsx from "clsx";
import { ElementType, ReactNode } from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import { experimentalStyled as styled } from "@material-ui/core/styles";

type Props = {
  children?: ReactNode;
  className?: string;
  component?: ElementType<any>;
};

type GridProps = BoxProps & {
  minColumnWidth?: string;
  gridGap?: string;
  numberOfColumns?: string;
};

const internalProps = ['minColumnWidth', 'gridGap', 'numberOfColumns'];

const GridWrapper = styled(Box)(({ theme }) => ({
  padding: theme?.grid?.gridWrapperPadding,
}));

const FlexGrid = styled(
  (props: BoxProps) => {
    const { className, ...otherProps } = props;

    return (
      <Box className={clsx([props.className, 'flex-grid'])} {...otherProps} />
    );
  },
  {
    shouldForwardProp: (prop) => {
      if (typeof prop === 'string') {
        return !internalProps.includes(prop);
      }

      return true;
    },
  }
)<GridProps>(({ theme, minColumnWidth, gridGap }) => ({
  display: 'flex',
  justifyContent: 'space-around',

  '& > *': {
    flex: '0 1 100%',

    '&:not(:first-of-type)': {
      marginLeft: gridGap || theme?.grid?.gridGap,
    },
  },

  [`@media (max-width: calc(${
    minColumnWidth || theme?.grid?.minColumnWidth
  } * 3))`]: {
    flexWrap: 'wrap',

    '& > *': {
      margin: `${gridGap || theme?.grid?.gridGap} 0 0 !important`,
    },
  },

  [`@media (min-width: calc(${
    minColumnWidth || theme?.grid?.minColumnWidth
  } * 3))`]: {
    '& + .flex-grid': {
      marginTop: gridGap || theme?.grid?.gridGap,
    },
  },
}));

const BoxGrid = styled(
  (props: BoxProps) => {
    const { className, ...otherProps } = props;

    return (
      <Box className={clsx([props.className, 'box-grid'])} {...otherProps} />
    );
  },
  {
    shouldForwardProp: (prop) => {
      if (typeof prop === 'string') {
        return !internalProps.includes(prop);
      }

      return true;
    },
  }
)<GridProps>(({ theme, minColumnWidth, gridGap, numberOfColumns }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${numberOfColumns || 'auto-fit'}, minmax(${
    minColumnWidth || theme?.grid?.minColumnWidth
  }, 1fr))`,
  gridGap: gridGap || theme?.grid?.gridGap,

  '& + .box-grid': {
    marginTop: gridGap || theme?.grid?.gridGap,
  },
}));

export { GridWrapper, FlexGrid, BoxGrid };
