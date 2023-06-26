import React from "react";
import "./Client.css";

function Client() {
  return (
    <div className="main-client">
      <span style={{ fontWeight: "bold", marginLeft: "20px" }}>
        Client Access
      </span>{" "}
      <input
        type="radio"
        style={{
          padding: "0px",
          marginRight: "0px",
          height: "15px",
          width: "20px",
        }}
      />
      <label>Yes</label>
      <input
        type="radio"
        style={{
          padding: "0px",
          margin: "0px",

          height: "15px",
          width: "20px",
        }}
      />
      <label>No</label>
      <h4 style={{ marginLeft: "20px" }}>Client Admin User</h4>
      <h5>Client Admin #1</h5>
      <div className="basic-info">
        <div>
          {" "}
          <label> First Name</label> <br />
          <input value="Kashyap" />
        </div>
        <div>
          {" "}
          <label>Last Name</label> <br />
          <input value="Trivedi" />
        </div>
        <div>
          {" "}
          <label>Email-ID</label> <br />
          <input value="kptrivedi0019@D'Hive.in" />
        </div>
        <div>
          {" "}
          <label>Mobile No</label> <br />
          <input value="8555574995" />
        </div>
      </div>
      <h5>Client Admin #2</h5>
      <div className="basic-info">
        <div>
          {" "}
          <label>First Name</label> <br />
          <input value="Kashyap" />
        </div>
        <div>
          {" "}
          <label>Last Name</label> <br />
          <input value="Trivedi" />
        </div>
        <div>
          {" "}
          <label>Email-ID</label> <br />
          <input value="kptrivedi0019@D'Hive.in" />
        </div>
        <div>
          {" "}
          <label>Mobile No</label> <br />
          <input value="8555574995" />
        </div>
      </div>
      <button>SAVE</button>
    </div>
  );
}

export default Client;
