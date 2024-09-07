import React from "react";

function Images() {
  return (
    <>
      <div className="w3-row-padding w3-padding-16" id="about">
        <div className="w3-col m6">
          <img
            src="https://www.w3schools.com/w3images/avatar_g.jpg"
            alt="Me"
            style={{ width: "100%" }}
          />
        </div>
        <div className="w3-col m6">
          <img
            src="https://www.w3schools.com/w3images/me2.jpg"
            alt="Me"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
export default Images;
