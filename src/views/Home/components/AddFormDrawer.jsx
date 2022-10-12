import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import useAddForm_FabContainer from '../../../stores/AddForm_FabContainer';
import AddBathroomForm from '../../AddBathroomForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFormDrawer() {
  
  const { isOpen, setIsOpen } = useAddForm_FabContainer(state => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen
  }))

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Agrega un nuevo baño
            </Typography>
          </Toolbar>
        </AppBar>
        <AddBathroomForm handleClose={handleClose} />
      </Dialog>
    </div>
  );
}