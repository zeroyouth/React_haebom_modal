import React from "react";
import './viewmore.css';
import { useState, useEffect } from "react";
import OnelineChart from '../chart/onelinechart';
import ThreeLineChartA from '../chart/threelinecharta';
import ThreeLineChartG from '../chart/threelinechartg';

function ViewMore ({f_type, f_name}) {

    const [sdays, setDays] = useState(7);
    const [selectedmarket, setSelectedMarket] = useState('1');
    const [viewmorebtn, setViewmorebtn] = useState();

    const onClick = () => {
        setSelectedMarket('1')
        setDays(7)
    }


    useEffect(()=> {
        setSelectedMarket();
      }, []);

    const onClick1 = (e) => {
        setDays(e.target.value);
    } 

    const onClick2 = (e) => {
        setSelectedMarket(e.target.value);
    }


    return(
        <div>
            <div> 
               <div className="accodion_area">
               <button className="btn viewmore_btn"
               onClick={onClick}
               >더보기</button>

               <div className="chart_area">
                <div> 
                <button onClick={onClick1} value={7}>1주일</button>
                <button onClick={onClick1} value={30}>1개월</button>
                <button onClick={onClick1} value={90}>3개월</button>
                <button onClick={onClick1} value={365}>1년</button>
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
               </div>

               <button className="modal_btn"
               >구매하기</button>
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



export default ViewMore