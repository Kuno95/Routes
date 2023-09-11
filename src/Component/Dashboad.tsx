import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Dashboad() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
    .then((response) => {
        console.log("123", response)
        setData(response.data.products);  
   });
});
function RemoveToken() {
  localStorage.removeItem('token');
  window.location.reload()
}

    return (
    <>
    <button className='bg-red-500' onClick={RemoveToken}>LogOut</button>
    <TableContainer className='mt-5' component={Paper}>
      <Table sx={{ minWidth: 850,}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor:'#EFEFEF'}}>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} > ID</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Title</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Description</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Stock</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Rating</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Enabled</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize:12}} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.title}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.stock }</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.stock}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.rating}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">
              {/* <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  // label="Female"
                /> */}
              </TableCell>
              <TableCell align="left">
                <div className='flex'>
                  <button  className='primary-color font-semibold text-[13px]'>VIEW</button>
                  <button  className='ml-2 primary-color font-semibold text-[13px]'>EDIT</button>
                  <button className='ml-3  primary-color_delete text-[13px]'>DELETE</button>
                  {/* <ToastContainer /> */}
                </div> 
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}
export default Dashboad