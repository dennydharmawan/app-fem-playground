// @refresh reset
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform
} from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import useResizeObserver from "use-resize-observer";

// https://codesandbox.io/s/react-spring-react-use-gesture-bottom-sheet-tabs-shopping-cart-soy88?file=/src/index.js
import { Box, Button, Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const BottomSheetContainer = styled(motion.div)({
  width: '100%',
  position: 'absolute',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
  bottom: 0,
  left: 0,
  background: '#fff',
  pointerEvents: 'auto',
});

const Backdrop = styled(motion.div)({
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  position: 'absolute',
  inset: 0,
  overflow: 'auto',
  touchAction: 'none', // Disable iOS body scrolling
});

type Props = {
  children: ReactNode;
  initialOpen?: boolean;
  open: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

function BottomSheet({
  children,
  initialOpen = false,
  open: controlledOpen,
  onOpen,
  onClose,
}: Props) {
  const [ready, setReady] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(initialOpen);

  const openIsControlled = controlledOpen != null;
  const isOpen = openIsControlled ? controlledOpen : open;

  const bottomSheetRef = useRef(null);
  const {
    ref: containerRef,
    width: containerWidth = 0,
    height: containerHeight = 0,
  } = useResizeObserver<HTMLDivElement>();
  const {
    ref: headerRef,
    width: headerWidth = 0,
    height: headerHeight = 0,
  } = useResizeObserver<HTMLDivElement>();
  const {
    ref: contentRef,
    width: contentWidth = 0,
    height: contentHeight = 0,
  } = useResizeObserver<HTMLDivElement>();

  const DRAWER_BLEEDING = 0;
  const HYSTERESIS = 0.0001;
  const ENABLE_BACKDROP = true;

  // const MAX_HEIGHT_IN_FRACTION = 0.5; // more than this let it autoflow
  // const MIN_HEIGHT_IN_FRACTION = 0.2;
  // const maxHeight = MAX_HEIGHT_IN_FRACTION * containerHeight;
  // const minHeight = MIN_HEIGHT_IN_FRACTION * containerHeight;
  // const minMaxContent = Math.min(maxHeight, Math.max(contentHeight, minHeight));

  const bottomSheetHeight = contentHeight + headerHeight;
  const maxPosition = bottomSheetHeight - DRAWER_BLEEDING;

  const sheetAnimation = useAnimation();
  const sheetPosition = useMotionValue(0);
  const shadeOpacity = useTransform(sheetPosition, [maxPosition, 0], [0, 0.6]);
  const backdropPointerEvents = useTransform(shadeOpacity, (latest) =>
    latest >= 0.3 ? 'auto' : 'none'
  );

  useEffect(() => {
    const isReady =
      containerHeight > 0 && headerHeight > 0 && contentHeight > 0;

    // sync the position as we render to prevent flashes of bottom sheet
    sheetPosition.set(isOpen ? 0 : maxPosition);

    if (isReady) {
      setReady(isReady);
    }
  }, [containerHeight, headerHeight, contentHeight]);

  useEffect(() => {
    if (ready) {
      sheetAnimation.start(isOpen ? 'visible' : 'hidden');
    }
  }, [isOpen]);

  return (
    <Box
      id="bottom-sheet__root"
      ref={containerRef}
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        // this may help with flashes
        // opacity: ready ? 1 : 0,
      }}
    >
      <Backdrop
        id="bottom-sheet__backdrop"
        style={{
          opacity: shadeOpacity,
          pointerEvents: backdropPointerEvents,
        }}
        onClick={() => {
          sheetAnimation.start('hidden');
          // setOpen(false);
          onClose?.();
        }}
      ></Backdrop>
      <Box
        id="bottom-sheet__wrapper"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <BottomSheetContainer
          layout
          ref={bottomSheetRef}
          id="bottom-sheet__content"
          drag="y"
          dragConstraints={{ top: 0, bottom: maxPosition }}
          dragElastic={0}
          dragMomentum={false}
          variants={{
            visible: {
              y: 0,
            },
            hidden: {
              y: maxPosition,
            },
          }}
          initial={false}
          animate={sheetAnimation}
          style={{
            y: sheetPosition,
            height: bottomSheetHeight,
          }}
          transition={{
            type: 'spring',
            stiffness: 210,
            damping: 26,
            mass: 1,
          }}
          onDragEnd={(event, { delta, offset, point, velocity }) => {
            if (Math.abs(offset.y) >= HYSTERESIS * maxPosition) {
              if (offset.y <= 0) {
                sheetAnimation.start('visible');
                // setOpen(true);
                onOpen?.();
              } else {
                sheetAnimation.start('hidden');
                // setOpen(false);
                onClose?.();
              }
            } else {
              if (offset.y <= 0) {
                sheetAnimation.start('hidden');
              } else {
                sheetAnimation.start('visible');
              }
            }
          }}
        >
          <Box
            ref={headerRef}
            id="bottom-sheet__header"
            sx={{
              backgroundColor: 'lightblue',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              width: '100%',
              pt: '8px',
            }}
          >
            <Box
              sx={{
                width: '38px',
                height: '4px',
                bgcolor: 'grey.500',
                borderRadius: '3px',
                mx: 'auto',
              }}
            />
            <Typography
              component="div"
              sx={{ px: '2rem', color: 'text.secondary' }}
            >
              &nbsp;
            </Typography>
          </Box>
          <Box
            id="bottom-sheet__children"
            sx={{
              width: '100%',
              height: '100%',
              overflow: 'auto',
            }}
          >
            <Box ref={contentRef}>
              <Button
                variant="contained"
                onClick={() => {
                  sheetAnimation.start({ y: '100%' });
                }}
              >
                test
              </Button>
              {children}
            </Box>
          </Box>
        </BottomSheetContainer>
      </Box>
    </Box>
  );
}

export default BottomSheet;
