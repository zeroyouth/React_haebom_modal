
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import STableBody from "./stablebody";
import './servicetable.css';
import ViewMore from "../viewmore/viewmore";


function ServiceTable ({clickedpage, searchedname}) {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [flowerdatas, setFlowerdatas] = useState();
     
    useEffect(()=> {
      fetchFlowerdatas();
    }, [clickedpage]);

    const fetchFlowerdatas = async () => {
        try{
          setError(null);
          setLoading(true);
    
          const response = await axios.get(`http://3.35.116.254:5000/api/table/${searchedname}/${clickedpage}`);
          setFlowerdatas(response.data.data);
        } catch(e){
          setError(e);
        }
        setLoading(false);
      }
      
     

     
      if (loading) {
        return(
          <div>
           
            로딩중~~~
          </div>
        )
      };
    
      if(error){
        return(
          <div>그런 꽃 없어. 다시 검색해.</div>
        )
      };
    
      if (!flowerdatas) return null;
    

    const flowerList =  flowerdatas && flowerdatas.map((v) => (
        <STableBody key={v.f_name}
        f_type={v.f_type}
        f_name={v.f_name}
        yangjae={v.yangjae}
        gyungbu={v.gyungbu}
        avg_price={v.avg_price}
        />
    ));

    const viewmore =  flowerdatas && flowerdatas.map((v) => (
      <ViewMore key={v.f_name}
      f_type={v.f_type}
      f_name={v.f_name}
      />
  ));
  
    return(
        <div>
          <div className="information">
          <div className="right">
            꽃 시세 및 거래 현황
             || 느낌표 이미지 : 호버
          </div>
          <div className="left">
            단위 : 원 | 기간 : 최근 1주일
          </div>
          </div>

            <div>
                <div className="intable">꽃 품목</div>
                <div className="intable">꽃 이름</div>
                <div className="intable">양재 시세</div>
                <div className="intable">경부선 시세</div>
                <div className="intable">평균 시세</div>
                <div className="intable">  </div>
                <div className="intable">  </div>
            </div>

            <div>
              <div>
             {flowerList}
             </div>
             {viewmore}
            </div>

        </div>
    )

}

export default ServiceTable