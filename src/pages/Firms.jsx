import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useEffect } from "react"
import useStockCall from "../service/useStockCall"
import { useSelector } from "react-redux"
import FirmCard from "../components/FirmCard"

const Firms = () => {
  const {getStockData} = useStockCall()
  const {firms} = useSelector((state) => state.stock)
 /*  const {token} = useSelector(state => state.auth)
  const dispatch = useDispatch() */
  
 /*  const getFirms = async () => {
    dispatch(fetchStart())
try {
  const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, {
    headers: {Authorization: `Token ${token}`}
  })
  dispatch(getFirmsSuccess(data))
  console.log(data);
} catch (error) {
  dispatch(fetchFail())
  console.log(error);
}

  } */
  useEffect(() => {
    getStockData("firms")
  },[])
  
  return <div>
    <Typography variant="h4" color={"error"} mb={3}>Firms</Typography>
    <Button variant="contained">New Firm</Button>

    <Grid container spacing={2} justifyContent={"center"}>
      {firms?.map((firm) =>
      <Grid item key={firm.id}>
        <FirmCard firm = {firm}/>
      </Grid>
       )}
      
    </Grid>
  </div>
}

export default Firms
