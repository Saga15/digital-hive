import "./Basic.css";
import Select from "react-select";

function BasicInfo() {
  const options = [
    { value: "Registred office", label: "Registred office" },
    { value: "Owned", label: "Owned" },
  ];

  return (
    <div className="main-basic">
      <h3> Basic Information </h3>
      <div className="basic-info">
        <div>
          {" "}
          <label>client Group Name</label> <br />
          <input value="Applo Hospital Group" />
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
      <h3> Address</h3>{" "}
      <div className="basic-info">
        <div>
          {" "}
          <label>Address Type</label> <br />
          <div className="bts">
            {" "}
            <Select options={options} />
          </div>
        </div>
        <div style={{ marginLeft: "10px" }}>
          {" "}
          <label>Premises</label> <br />
          <div className="bts">
            {" "}
            <Select options={options} />
          </div>
        </div>
        <div>
          {" "}
          <label style={{ marginLeft: "39px" }}>Address Line1</label> <br />
          <input
            style={{ width: "705px", marginLeft: "40px" }}
            className="address-line"
            value="Raheja Titanium 6, Westren Express Highway"
          />
        </div>
      </div>
      <div className="basic-info">
        <div>
          {" "}
          <label>Address line 2</label> <br />
          <input
            style={{ width: "705px" }}
            value="Gitanjali Railway Colony Ram Nagar Goregaon"
          />
        </div>
        <div>
          {" "}
          <label>State</label> <br />
          <input value="Maharashtara" />
        </div>
        <div>
          {" "}
          <label>City</label> <br />
          <input value="Mumbai" />
        </div>
      </div>
      <div>
        {" "}
        <label>PinCode</label> <br />
        <input value={40009} />
      </div>
      <button>SAVE</button>
    </div>
  );
}

export default BasicInfo;
