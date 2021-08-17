import React, { useEffect, useState } from "react";
import DummySponser from "../DummyDatas/DummySponser";

function Sponser() {
  return (
    <div className="sponserOut">
      <div className="sponsered">sponserd</div>
      <div className="sponBodyOut">
        <div className="sponPics">X</div>
        <div className="sponContentsOut">
          <div className="sponTitle">
            {DummySponser.title.length >= 45
              ? DummySponser.title.slice(0, 45) + "..."
              : DummySponser.title}
          </div>
          <div className="sponContents">
            {DummySponser.contents.length >= 45
              ? DummySponser.contents.slice(0, 45) + "..."
              : DummySponser.contents}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponser;
