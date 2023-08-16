import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react"
import useStockCall from "../service/useStockCall"
import { useSelector } from "react-redux"
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/FirmModal"

const Firms = () => {
  const {getStockData} = useStockCall()
  const {firms} = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({name:"",
        phone: "",
        address:"",
        image: ""})
  }
  const [info, setInfo] = useState({
    name:"",
    phone: "",
    address:"",
    image: ""
})

  useEffect(() => {
    getStockData("firms")
  },[])
  
  return <div>
    <Typography variant="h4" color={"error"} mb={3}>Firms</Typography>
    <Button variant="contained" onClick={handleOpen} sx={{marginBottom: "15px"}}>New Firm</Button>
    <FirmModal open= {open} handleClose={handleClose} info = {info} setInfo={setInfo}/>
    <Grid container spacing={2} justifyContent={"center"}>
      {firms?.map((firm) =>
      <Grid item key={firm.id}>
        <FirmCard firm = {firm} handleOpen={handleOpen} info = {info} setInfo={setInfo}/>
      </Grid>
       )}
      
    </Grid>
   
  </div>
}

export default Firms
