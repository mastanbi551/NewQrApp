import React from "react";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const handleBrideClick = () => {
    navigate('/brideInfo')
  }

  const handleGroomClick = () => {
    navigate('groomInfo')
  }
  return (
    <div className="main-container">
      <center>
        <h1 className="main-heading">Wedding Invitation</h1>
        <div className="main-buttons">
            <button className="bride-button" onClick={handleBrideClick}>Bride</button>
            <button className="groom-button" onClick={handleGroomClick}>Groom</button>
        </div>
      </center>
    </div>
  );
};

export default Welcome;
