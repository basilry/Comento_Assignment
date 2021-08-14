import React from "react";

function Filter(props) {
  return (
    <div className="FilterOut">
      <div className="FilterBody">
        <div className="BtnOut">
          <div className="FilterXBtn" onClick={props.handlePopup}>
            X
          </div>
        </div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox"></input>
          Category_name
        </div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox" />
          Category_name
        </div>
        <div className="FilterCategory">
          <input className="checkbox" type="checkbox" />
          Category_name
        </div>
        <div className="filterSave">저장하기</div>
      </div>
      
    </div>
  );
}

export default Filter;
