import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LocationDialog({setLocationPermission}) {
  const [open, setOpen] = React.useState(true);

  const handleAgree = () => {
    setLocationPermission(true);
    setOpen(false);
  };

  const handleDisagree = () => {
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Para una mejor experiencia permitanos utilizar su ubicación."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>No gracias</Button>
          <Button onClick={handleAgree}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
