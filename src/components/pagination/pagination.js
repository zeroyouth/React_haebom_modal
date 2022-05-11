
import React,{useState, useEffect} from "react";
import axios from "axios";

import {Pagination, Box} from 'grommet';
import './paginaton.css';

import ServiceTable from '../table/servicetable';
import STableBody from '../table/stablebody.js';


function TablePagination ({searchedname ,clickedpage, setClickedpage }) {

  useEffect(() => {
    fetchTotalpage();
  }, [searchedname]);


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [totalpage, setTotalpage] = useState();

   
      const fetchTotalpage = async () => {
        try{
          setError(null);
          setLoading(true);
          const response = await axios.get(`http://3.35.116.254:5000/api/page/${searchedname}`);
          setTotalpage(response.data);
        } catch(e){
          setError(e);
        }
        setLoading(false);
      }

    

      if (loading) {
        return(
          <div>
            <img src="../img/searchicon.png" />
            로딩중~~~
          </div>
        )
      };
    
      if(error){
        return(
          <div>궁금한꽃</div>
        )
      };
    
      if (!totalpage) return null;



      return(
          <div>
               <ServiceTable 
               searchedname={searchedname} 
               clickedpage={clickedpage}/>
              <div>
                 <Box>
                   <Pagination numberItems={totalpage.page_num*10} 
                     onChange ={({page}) =>
                       setClickedpage(page)}
                     />
                 </Box>
              </div>
         
          </div>
      )

}

export default TablePagination