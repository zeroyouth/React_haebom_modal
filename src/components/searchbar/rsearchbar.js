import React from "react";
import { useState } from "react";
import Rsearchbar from "./rsearchbar.jsx";
import FlowerNamesData from './FlowerNamedata.json';

function RsearchBar () {
  const FlowerNames = FlowerNamesData;

  const [searchedname, setSearchedname] = useState();

  const [keyword, setKeyword] = useState();
  const [keywords, setKeywords] = useState([]);

  const updateField = (field, value, updata = true) => {
    if(updata) onSearch(value);
    if(field === 'keyword'){
      setKeyword(value);
    }
    if(field === 'keywords'){
      setKeywords(value);
    }
  }

  const onSearch = text => {
    var keywords =  FlowerNames.filter(item => true === matchName(item.search_nm, text));
    setKeywords({keywords});
  }

  const matchName = (search_nm, keyword) => {
    var keyLen = keyword.length;
    search_nm = search_nm.toLowerCase().substring(0, keyLen);
    if(keyword === "") return false;
    return search_nm === keyword.toString().toLowerCase();
  };






  return (
    <div>
      <Rsearchbar
        keyword={keyword}
        keywords={keywords}
        updateField={updateField}
        />
    </div>
  );

}

export default RsearchBar