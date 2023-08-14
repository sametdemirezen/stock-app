import { useEffect } from "react"
import useStockCall from "../service/useStockCall"
import { useSelector } from "react-redux"
const Sales = () => {
  const {getStockData} = useStockCall()
const {sales}= useSelector((state) => state.stock)
  useEffect(() => {
    getStockData("sales")
  },[])
  console.log(sales);
  return <div>Sales</div>
}

export default Sales
