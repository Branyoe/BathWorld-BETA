import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import bathroomDrawerStore from '../../../../stores/bathroomDrawerStore';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function BathroomDrawer(props) {
  const { window } = props;
  const { isOpen, setIsOpen, data } = bathroomDrawerStore(state => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen,
    data: state.data
  }))
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleViewMore = () => {
    toggleDrawer(false);
    navigate(`/bathroom/${data.id}`);
  }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(25% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        disableDiscovery={false}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" sx={{ p: 2, color: 'text.primary', paddingTop: 3 }}>{data.name}</Typography>
            <Stack paddingTop={2} justifyContent="start">
              <Button
                size="small"
                onClick={toggleDrawer(false)}
              >
                <CloseIcon style={{ color: "#bbb" }} />
              </Button>
            </Stack>
          </Stack>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            display: "flex",
            flexDirection: "column",
            justifyContent: "end"
          }}
        >
          <Stack p={1}>
            <Button onClick={handleViewMore} variant="contained">
              Ver más
            </Button>
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

BathroomDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BathroomDrawer;
