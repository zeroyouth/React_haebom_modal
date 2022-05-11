import React, { useState, useEffect } from "react";



const Ssearch = ({ keyword, searching, updateField }) => {
  
  
    const updateText = (text) => {
    updateField("keyword", text, false);
    updateField("searching", []);
  };
  var rendersearchedname;
  const arr = searching["searchedname"];

  if (arr) {
    rendersearchedname = arr.map((item) => {
      return <SearchView updateText={updateText} search_nm={item.search_nm} />;
    });
  }
  


  return (
    <div className="auto">
      <input
        className="searchBar"
        placeholder="궁금한 꽃을 검색해 보세요"
        value={keyword || ""}
        onChange={(e) => updateField("keyword", e.target.value)}
      />
      <div className="search-searchedname">{rendersearchedname}</div>
    </div>
  );
};

const SearchView = ({ search_nm, index, updateText }) => {
  return (
    <div>
      <div
        onClick={() => updateText(search_nm)}
        className={`search-preview ${index === 0 ? "start" : ""}`}
      >
        <div >
          <ul>
            <li>{search_nm}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ssearch;
