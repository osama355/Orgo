import React, { useState } from "react";
import "../employee/employeeBody.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import VideoPopUp from "../popups/VideoPopUp";

function EmployeeBody() {
  const [openPop, setOpenPop] = useState(false);
  const handleClose = () => {
    setOpenPop(!openPop);
  };

  return (
    <div className="emp-body">
      <div className="body-section-left">
        <ul>
          <li>
            <h4>Video Introduction</h4>
            <AddCircleOutlineIcon onClick={handleClose} />
          </li>
          <li>
            <h4>Hours per week</h4>
            <CreateTwoToneIcon />
          </li>
          <li>
            <h4>Lamguages</h4>
            <AddCircleOutlineIcon />
            <CreateTwoToneIcon />
          </li>
          <li>
            <h4>Education</h4>
            <AddCircleOutlineIcon />
          </li>
          <li id="verification">
            <h4>Verification</h4>
            <li>
              Military Vitiran
              <AddCircleOutlineIcon />
            </li>
          </li>
        </ul>
      </div>
      {openPop ? (
        <VideoPopUp handleClose={handleClose} />
      ) : null}
      <div className="body-section-right"></div>
    </div>
  );
}

export default EmployeeBody;
