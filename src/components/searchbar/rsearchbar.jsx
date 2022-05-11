import React, { useState, useEffect } from "react";
import TablePagination from "../pagination/pagination";


const Rsearchbar = ({ keyword, keywords, updateField }) => {
  const [searchedname, setSearchedName] = useState('');
  const [clickedpage, setClickedpage] = useState(1);
   
  const updateText = (text) =>{
    updateField("keyword", text, false);
    updateField("keywords", []);
  };

  var renderkeywords;
  const arr = keywords["keywords"];

  if(arr){
    renderkeywords = arr.map((item) => {
      return <SearchView updateText={updateText} search_nm={item.search_nm} />;
    });
  }

  const onChage = e => {
    if(e.key === 'Enter'){
        setSearchedName(e.target.value);
        setClickedpage(1)
    }
}

  return (
    <div>
    <div>
        <input 
        placeholder="궁금한 꽃 검색"
        value={keyword || ""}
        onChange={(e) => updateField("keyword", e.target.value)}
        onKeyDown={onChage}
        />
        <div>{renderkeywords}</div>
    </div>
    <div>
            <TablePagination searchedname={searchedname} clickedpage={clickedpage} setClickedpage={setClickedpage} />
            </div>
    </div>
  )

}

const SearchView = ({ search_nm, index, updateText }) => {
  return (
    <div>
      <div
        onClick={() => updateText(search_nm)}
        className={`search-preview ${index === 0 ? "start" : ""}`}
      >
        <div>
          <ul>
            <li>{search_nm}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Rsearchbar;
