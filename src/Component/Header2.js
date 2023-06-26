import React from "react";
import { useState } from "react";
import TabInfo from "./Tabs";

function Header2() {
  const [key, setKey] = useState("Basic Info");

  const steps = [
    { label: "Basic Info" },
    { label: "Client" },
    { label: "Firm Access" },
  ];

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
      <div className="group">
        Group Settings{" "}
        <span
          className="ctns"
          style={{ fontWeight: "bold", marginLeft: "20px" }}
        >
          &#62;Account/Group Details
        </span>
      </div>
      <TabInfo />
    </div>
  );
}

export default Header2;
