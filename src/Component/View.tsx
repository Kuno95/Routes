import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({row, open, handleCloseView}:any) {
  // console.log("333", row)

  return (
    <div>
      <Button variant="outlined">
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseView}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText sx={{height:510}} id="alert-dialog-slide-description">
            <div>
              <h3 className='mb-5'>Account Details</h3>
              <div className='flex gap-16 mb-5'>
                <div>
                <p>First Name</p>
                <p></p>
                </div>
                <p>Last Name</p>
                <p>Alias</p>
              </div>
              <div className='flex mb-5'>
                <p>Role</p>
                <p>Email</p>
                <p>Status</p>
              </div>
              <div className='flex mb-5'>
                <p>ID</p>
                <p>Phone</p>
              </div>
              <p className='h-[0.5px] w-30 bg-black'></p>
              <div className='flex mb-5'>
                <p>Contract Type</p>
                <p>Contract Start Date</p>
                <p>Contract End Date</p>
              </div>
              <div className='flex mb-5'>
                <p>Company</p>
                <p>Office</p>
              </div>
              <p className='h-[0.5px] w-30 bg-black'></p>
              <div className='flex mb-5'>
                <p>Team</p>
                <p>Position</p>
                <p>Level</p>
              </div>
              <div className='flex mb-5'>
                <p>Skill</p>
              </div>
              <p className='h-[0.5px] w-30 bg-black mb-5'></p>
              <p>Created on 12/02/2022</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView}>Disagree</Button>
          <Button onClick={handleCloseView}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
