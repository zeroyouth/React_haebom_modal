import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ThreeLineChartA ({f_name, f_type, sdays}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);



    const fetchsetData = async () => {
      try{
        setError(null);
        setLoading(true);
        const response = await axios.get(`http://3.35.116.254:5000/api/chart/${f_type}/${f_name}/${sdays}/양재`);
        setData(response.data.data);
      } catch(e){
        setError(e);
      }
      setLoading(false);
    }

    useEffect(()=> {
      fetchsetData();
    }, [sdays]);


  
  return (

  <div>a
    
  </div>

  )
};

export default ThreeLineChartA;