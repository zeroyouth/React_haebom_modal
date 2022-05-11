import React from "react";
import { useState } from "react";
import TablePagination from "../pagination/pagination";


function SsearchBar () {

    const [searchedname, setSearchedName] = useState('');

    const onChage = e => {
        if(e.key === 'Enter'){
            setSearchedName(e.target.value);
        }
    }


    return(
        <div>
            <div>
                <input 
                type= 'text'
                placeholder="궁금한 꽃을 검색해 보세요"
                onKeyDown={onChage}
                ></input>
            </div>


            <div>
            <TablePagination searchedname={searchedname}/>
            </div>
        </div>
    )

}

export default SsearchBar