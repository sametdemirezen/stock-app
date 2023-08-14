import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch } from "react-redux"
import axios from "axios"
import { useSelector } from "react-redux"
const useStockCall = () => {
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const getFirms = async () => {
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
    
      }
  
  
    return {getFirms}
}

export default useStockCall