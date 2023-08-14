import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import { useEffect } from "react"
import useStockCall from "../service/useStockCall"
import { useSelector } from "react-redux"

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
  </div>
}

export default Firms
