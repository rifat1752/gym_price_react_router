import LineCharts from "./Components/Charts/lineCharts"
import Navbar from "./Components/Navbar/Navbar"
import Phones from "./Components/Phones/Phones"
import PriceOptions from "./Components/PriceOption/PriceOptions"



function App() {


  return (
    <>
    <Navbar></Navbar>
      
     <PriceOptions></PriceOptions>
     <LineCharts></LineCharts>
     <Phones></Phones>
    </>
  )
}

export default App
