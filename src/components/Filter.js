import axios from "axios";
import React, { useEffect, useState } from "react";
import grayClose from "../gray_close.png";

function Filter(props) {

  const handleClick = () => {

    alert("선택하신 필터가 저장되었습니다!")
    props.handlePopup()
  }

  return (
    <div className="FilterOut">
      <div className="FilterBody">
        <div className="BtnOut">
          <div className="FilterXBtn" onClick={props.handlePopup}>
            <img src={grayClose} alt="grayClose" className="grayClose" />
          </div>
        </div>
        <div className="FilterName">필터</div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox" />
          <div className="categoryName">category_name</div>
        </div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox" />
          <div className="categoryName">category_name</div>
        </div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox" />
          <div className="categoryName">category_name</div>
        </div>
        <div className="filterSave">
          <div className="saveBtnName" onClick={() => {handleClick()}}>저장하기</div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
