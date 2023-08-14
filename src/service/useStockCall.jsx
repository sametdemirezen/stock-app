import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
const useStockCall = () => {
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()
    const getStockData = async (url) => {
        dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken(`/stock/${url}/`)
      dispatch(getStockSuccess({data, url}))
      console.log(data);
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);
    }
    
      }


      const deleteStockData = async (url, id) => {
        dispatch(fetchStart())
        try {
          await axiosWithToken.delete(`/stock/${url}/${id}/`,)
          toastSuccessNotify(`${url} er slettet`)
          getStockData(url)
        } catch (error) {
          dispatch(fetchFail())
          toastErrorNotify(`${url} kan ikke slettes`)
          console.log(error)
        }
      }




    /* const getFirms = async () => {
        dispatch(fetchStart())
    try {
      const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, {
        headers: {Authorization: `Token ${token}`}
      })
      dispatch(getStockSuccess(data))
      console.log(data);
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);
    }
    
      } */
  
  
    return {getStockData, deleteStockData}
}

export default useStockCall