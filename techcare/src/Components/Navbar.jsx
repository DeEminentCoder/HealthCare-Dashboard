// import React from 'react'
const Navbar = () => {
  return (
    <div
      id="nav-container"
      className="d-flex align-items-center justify-content-between gap- bg-body-white px-4 py-2 shadow-sm rounded-5 mx-4 my-3"
    >
      <div id="logo">
        <div>
          <img src="TestLogo.svg" alt="" width={160} />
        </div>
      </div>
      <div id="nav" className="d-flex gap-2 justify-content-between">
        <div id="nav-links" className="d-flex py-1 px-3 btn">
          <img src="home.svg" alt="" width={14} />
          <span className="fw-bold p-1">Overview</span>
        </div>
        <div
          id="nav-links"
          className="d-flex py-1 px-3 btn btn-info active rounded-5"
        >
          <img src="group.svg" alt="" width={20} />
          <span className="fw-bold p-1">Patients</span>
        </div>
        <div id="nav-links" className="d-flex py-1 px-3 btn">
          <img src="calendar.svg" alt="" width={13} />
          <span className="fw-bold p-1">Schedule</span>
        </div>
        <div id="nav-links" className="d-flex py-1 px-3 btn">
          <img src="chat.svg" alt="" width={15} />
          <span className="fw-bold p-1">Message</span>
        </div>
        <div id="nav-links" className="d-flex py-1 px-3 btn">
          <img src="card.svg" alt="" width={15} />
          <span className="fw-bold p-1">Transactions</span>
        </div>
      </div>
      <div id="right" className="d-flex">
        <div id="right-links" className="d-flex gap-1 btn">
          <img src="senior.png" alt="" height={35} />
          <div className="d-flex flex-column text-start">
            <span className="fw-bold p-0">Dr. Jose Simmons</span>
            <span className="fw- p-0">General Practitioner</span>
          </div>
        </div>
        <div id="" className="btn">
          <img src="settings.svg" alt="" width={15} />
        </div>
        <div id="nav-links" className="btn">
          <img src="more.svg" alt="" width={3} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
