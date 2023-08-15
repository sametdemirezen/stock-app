import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import {toastErrorNotify,toastSuccessNotify } from "../helper/ToastNotify"
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


      const postStockData = async (url, info) => {
        dispatch(fetchStart())
        try {
          await axiosWithToken.post(`/stock/${url}/`, info)
          toastSuccessNotify(`${url} er sendt`)
          getStockData(url)
        } catch (error) {
          dispatch(fetchFail())
          toastErrorNotify(`${url} kan ikke sendes`)
          console.log(error)
        }
      }
  
  
    return {getStockData, deleteStockData, postStockData}
}

export default useStockCall