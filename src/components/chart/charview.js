import React,{useEffect} from "react";
import ChartButton from "./chartbutton";



function ChartView ({f_name, f_type}) {

  useEffect(() => {
    <ChartButton />
  }, []);
  
  return(
      <div>
        <div>
            <ChartButton f_name={f_name} f_type={f_type}/>
          </div>
      </div>
  )

}

export default ChartView