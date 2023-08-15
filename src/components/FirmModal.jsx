import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../styles/globalStyles';
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { useState } from 'react';
import useStockCall from '../service/useStockCall';
export default function FirmModal({open, handleClose, info, setInfo}) {
    const {postStockData} = useStockCall()
    /* const [info, setInfo] = useState({
        name:"",
        phone: "",
        address:"",
        image: ""
    }) */
    const handleChange = (e) =>{
        const {name, value} = e.target
        setInfo({...info, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        postStockData("firms", info)
        setInfo({name:"",
        phone: "",
        address:"",
        image: ""})
        handleClose()
    }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }} component="form"
              onSubmit= {handleSubmit}
            >
              <TextField
                label="Firm Name"
                name="name"
                id="name"
                type="text"
                variant="outlined"
                onChange={handleChange}
                value={info?.name}
                required
                
              />
              <TextField
                label="Phone"
                name="phone"
                id="phone"
                type="tel"
                variant="outlined"
                onChange={handleChange}
                value={info?.phone}
                required
                
              />
              <TextField
                label="Address "
                name="address"
                id="address"
                type="text"
                variant="outlined"
                onChange={handleChange}
                value={info?.address}
                required
                
              />

<TextField
                label="Image"
                name="image"
                id="image"
                type="url"
                variant="outlined"
                onChange={handleChange}
                value={info?.image}
                required
                
              />

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}