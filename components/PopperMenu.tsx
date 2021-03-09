//https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64
import {
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { useClickAway } from "react-use";

import { Box, ClickAwayListener, Grow, Paper, Popper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const callAll = <P extends any[]>(...fns: Array<(...a: P) => void>) => (
  ...args: P
) => fns.forEach((fn) => fn?.(...args));

type PopperMenuContextType = {
  anchorRef: RefObject<HTMLButtonElement>;
  arrowRef: HTMLSpanElement | null;
  setArrowRef: Dispatch<SetStateAction<HTMLSpanElement | null>>;
  open: boolean;
  handleToggle: () => void;
  handleClose: (event: MouseEvent | TouchEvent) => void;
};

const PopperMenuContext = createContext<PopperMenuContextType | null>(null);
PopperMenuContext.displayName = 'PopperMenuContext';

function usePopperMenu() {
  const context = useContext(PopperMenuContext);

  if (!context) {
    throw new Error('usePopperMenu must be used within <PopperMenu>');
  }

  return context;
}

const useStyles = makeStyles({
  popper: {
    zIndex: 1,
    '&[data-popper-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.71em',
      '&::before': {
        transformOrigin: '0 100%',
      },
    },
    '&[data-popper-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.71em',
      '&::before': {
        transformOrigin: '100% 0',
      },
    },
    '&[data-popper-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.71em',
      height: '1em',
      width: '0.71em',
      '&::before': {
        transformOrigin: '100% 100%',
      },
    },
    '&[data-popper-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.71em',
      height: '1em',
      width: '0.71em',
      '&::before': {
        transformOrigin: '0 0',
      },
    },
  },
  arrow: {
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
    boxSizing: 'border-box',
    color: '#2B323A',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  },
});

function PopperMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <PopperMenuContext.Provider
      value={{
        anchorRef,
        arrowRef,
        setArrowRef,
        open,
        handleToggle,
        handleClose,
      }}
    >
      {children}
    </PopperMenuContext.Provider>
  );
}

function PopperMenuButton({ children }: { children: ReactElement }) {
  const { anchorRef, handleToggle } = usePopperMenu();

  const { onClick } = children.props;

  const props = {
    edge: 'start',
    color: 'inherit',
    ref: anchorRef,
    ['aria-haspopup']: 'true',
    ['aria-label']: 'menu',
    onClick: callAll(onClick, handleToggle),
  };

  return cloneElement(children, { ...props });
}

function PopperMenuContent({ children }: { children: ReactNode }) {
  const classes = useStyles();
  const {
    open,
    anchorRef,
    arrowRef,
    setArrowRef,
    handleClose,
  } = usePopperMenu();

  const menuRef = useRef(null);
  useClickAway(menuRef, (event: MouseEvent | TouchEvent) => {
    handleClose(event);
  });

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role="menu"
      transition
      disablePortal
      className={classes.popper}
      modifiers={[
        {
          name: 'flip',
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: 'document',
            padding: 8,
          },
        },
        {
          name: 'preventOverflow',
          enabled: true,
        },
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper
            sx={{
              backgroundColor: '#2B323A',
              color: '#fff',
              boxShadow:
                '0 10px 20px hsla(0, 0%, 0.0000%, .15), 0 3px 6px hsla(0, 0%, 0.0000%, .10)',
            }}
          >
            <span className={classes.arrow} ref={setArrowRef} />
            <Box ref={menuRef}>{children}</Box>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export { PopperMenu, PopperMenuButton, PopperMenuContent, usePopperMenu };
