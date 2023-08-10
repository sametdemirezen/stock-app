import axios from "axios"
import {toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"
export const login = async(userData) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const BASE_URL = "https://14101.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const {data} = await axios.post(`${BASE_URL}/account/auth/login/`, userData)

      dispatch(loginSuccess(data))
      toastSuccessNotify("Login performed")
      navigate("/stock")
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}