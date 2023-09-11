import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';

type Inputs = {
  example: string
  exampleRequired: string
  category: string
  discountPercentage: number
  brand: string
  rating: number
  stock: number
  price: number
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Add({openAdd, handleCloseAdd, }:any) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) =>
  {
    axios.put(`https://dummyjson.com/users/add`)
    .then((response) => {
      JSON.stringify({
      title: 'BMW Pencil' , 
      })
      console.log("123" , response)
   });
   alert(JSON.stringify(data));
  };
  return (
    <div>
      <Dialog
        open={openAdd}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAdd}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create New Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>
              <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-8'>
                  <div>
                    <p>First Name</p>
                    <input className='border border-gray p-1' type="text" placeholder=' First Name' />
                  </div>
                  <div>
                    <p>Last Name</p>
                    <input className='border border-gray p-1' type="text" placeholder=' Last Name'/>
                  </div>
                </div>
                <div className='flex gap-8 mt-4'>
                  <div>
                    <p>Alias</p>
                    <input className='border border-gray p-1' type="text" placeholder=' Alias'/>
                  </div>
                  <div>
                    <p>Role</p>
                    <input className='border border-gray p-1' type="text" placeholder=' User'/>
                  </div>
                </div>
                <div className='mt-4'>
                    <p>Email</p>
                    <input className='border border-gray w-[440px] p-1' type="text" placeholder=' Example@vinova.sg'/>
                </div>
                <div className='mt-4'>
                    <p>Phone</p>
                    <input className='border border-gray w-[440px] p-1' type="text" />
                </div>
                <p className='h-[0.5px] w-30 bg-black my-4 bg-opacity-20'></p>
                <div className='mt-4'>
                    <p>Contract Type</p>
                    <input className='border border-gray w-[440px] p-1' type="text" />
                </div>
              </form>
            </div>
                {/* <button className='mt-2 w-16 h-8 p-1 bg-[#044744] bg-opacity-20 text-sm text-[#044744] '>Save</button> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Add