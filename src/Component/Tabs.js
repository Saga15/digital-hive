import React from "react";
import Tabs from "react-bootstrap/Tabs";
import BasicInfo from "./BasicInfo";
import Client from "./Client";
import Firm from "./Firm";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";

function TabInfo() {
  const [key, setKey] = useState("Basic Info");
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Basic Info" },
    { label: "Client" },
    { label: "Firm Access" },
  ];
  // const activeStep = 1
  const handleSelect = (e) => {
    switch (e) {
      case "Basic Info":
        setKey("Basic Info");
        break;
      case "Client Access":
        setKey("Client Access");
        break;
      case "Firm Access":
        setKey("Firm Access");
    }
  };
  return (
    <div>
      {" "}
      <Tabs
        id="controlled-tab-example"
        defaultActiveKey={key}
        onSelect={(k) => handleSelect(k)}
        className="mb-3"
        style={{
          backgroundColor: "rgb(220, 243, 243)",
          display: "flex",
          flexDirection: "row",
          padding: "30px",
          gap: "30px",
          marginTop: "0px",
        }}
      >
        <Tab className="btn-d" eventKey="Basic Info" title="Basic Info">
          {key == "Basic Info" && <BasicInfo style />}
        </Tab>
        <Tab eventKey="Client Access" title="Client Access">
          {key == "Client Access" && <Client />}
        </Tab>
        <Tab eventKey="Firm Access" title="Firm Access">
          {key == "Firm Access" && <Firm />}
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabInfo;
