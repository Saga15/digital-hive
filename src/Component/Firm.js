import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Firm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main-client">
        <label>Assingned Firm</label>
        <div style={{ marginLeft: "12px" }}>
          {" "}
          <input value="TRP D'HIVE India LLP" />
        </div>
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

        <Button
          style={{ marginTop: "40px" }}
          variant="primary"
          onClick={handleShow}
        >
          Save
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unsaved Changes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="\images\Modal2.png" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Firm;
