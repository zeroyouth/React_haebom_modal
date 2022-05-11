import React,{useState, useEffect} from "react";
import OnelineChart from "./onelinechart";
import ThreeLineChartA from "./threelinecharta";
import ThreeLineChartG from "./threelinechartg";


function ChartButton ({f_name, f_type}) {


    const [sdays, setDays] = useState(7);
    const [selectedmarket, setSelectedMarket] = useState('1');


    useEffect(()=> {
        setSelectedMarket();
      }, []);

    const onClick = (e) => {
        setDays(e.target.value);
    } 

    const onClick2 = (e) => {
        setSelectedMarket(e.target.value);
    }


    return(
        <div>
            <div> 
                <button onClick={onClick} value={7}>1주일</button>
                <button onClick={onClick} value={30}>1개월</button>
                <button onClick={onClick} value={90}>3개월</button>
                <button onClick={onClick} value={365}>1년</button>
            </div>

            <div>
                <button onClick={onClick2} value={1}>전체</button>
                <button onClick={onClick2} value={2}>양재</button>
                <button onClick={onClick2} value={3}>경부</button>
            </div>

            <div>
                
                <Marketset selectedmarket={selectedmarket} f_name={f_name} f_type={f_type} sdays={sdays} />
               
            </div>
        </div>
    )
}

const Marketset = ({selectedmarket, f_name, f_type, sdays}) => {
    if(selectedmarket === '1'){
        return(
            <OnelineChart f_name={f_name} f_type={f_type} sdays={sdays}/>
        )
    }else if(selectedmarket === '2'){
        return(
            <ThreeLineChartA f_name={f_name} f_type={f_type} sdays={sdays}/>
        )
    }else if(selectedmarket === '3'){
        return(
            <ThreeLineChartG f_name={f_name} f_type={f_type} sdays={sdays}/>
        )
    } 
}


export default ChartButton